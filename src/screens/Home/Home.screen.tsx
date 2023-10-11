import { decode } from "@googlemaps/polyline-codec";
import React from "react";
import { Modal, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { styles } from "./Home.style";
import DestinationSelectionModal from "../../components/DestinationSelectionModal/DestinationSelectionModal.component";
import RouteConfirmationModal from "../../components/RouteConfirmationModal/RouteConfirmationModal.component";
import RouteSelectionModal from "../../components/RouteSelectionModal/RouteSelectionModal.component";
import TopModalButton from "../../components/TopModalButton/TopModalButton.component";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import EndNavigationModal from "../../components/EndNavigationModal/EndNavigationModal.component";

const ChooseModal = () => {
  const modalType = useRouteModalStore((state) => state.type);

  switch (modalType) {
    case RouteModalType.DestinationSelection:
      return <DestinationSelectionModal />;
    case RouteModalType.VehicleSelection:
      return <RouteSelectionModal />;
    case RouteModalType.VehicleConfirmation:
      return <RouteConfirmationModal />;
    case RouteModalType.EndNavigation:
      return <EndNavigationModal />;
  }
};

const HomeScreen = () => {
  const modalVisible = useRouteModalStore((state) => state.visible);
  const route = useRouteModalStore((state) => state.route);

  const from = decode(route.polyline);
  const coords = from.map((tuple) => ({
    latitude: tuple[0],
    longitude: tuple[1],
  }));

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Polyline coordinates={coords} strokeWidth={4} />
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
