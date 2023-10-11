import { decode } from "@googlemaps/polyline-codec";
import { Modal, View } from "react-native";
import MapView, { LatLng, Polyline } from "react-native-maps";

import { styles } from "./Home.style";
import DestinationSelectionModal from "../../components/DestinationSelectionModal/DestinationSelectionModal.component";
import RouteConfirmationModal from "../../components/RouteConfirmationModal/RouteConfirmationModal.component";
import RouteSelectionModal from "../../components/RouteSelectionModal/RouteSelectionModal.component";
import TopModalButton from "../../components/TopModalButton/TopModalButton.component";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";

const ChooseModal = () => {
  const modalType = useRouteModalStore((state) => state.type);

  switch (modalType) {
    case RouteModalType.DestinationSelection:
      return <DestinationSelectionModal />;
    case RouteModalType.VehicleSelection:
      return <RouteSelectionModal />;
    case RouteModalType.VehicleConfirmation:
      return <RouteConfirmationModal />;
  }
};

const HomeScreen = () => {
  const modalVisible = useRouteModalStore((state) => state.visible);
  const polyline = useRouteModalStore((state) => state.routePolyline);
  let coords: LatLng[] = [];

  if (polyline != null) {
    const from = decode(polyline);
    coords = from.map((tuple) => ({
      latitude: tuple[0],
      longitude: tuple[1],
    }));
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Polyline coordinates={coords} strokeWidth={3} />
      </MapView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={styles.modal}
        transparent
      >
        {ChooseModal()}
      </Modal>
      <View style={styles.openModal}>
        <TopModalButton />
      </View>
    </View>
  );
};

export default HomeScreen;
