import { decode } from "@googlemaps/polyline-codec";
import React from "react";
import { Modal, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import { styles } from "./Home.style";
import AddressInputModal from "../../components/AddressInputModal/AddressInputModal.component";
import DestinationSelectionModal from "../../components/DestinationSelectionModal/DestinationSelectionModal.component";
import EndNavigationModal from "../../components/EndNavigationModal/EndNavigationModal.component";
import RouteConfirmationModal from "../../components/RouteConfirmationModal/RouteConfirmationModal.component";
import RouteSelectionModal from "../../components/RouteSelectionModal/RouteSelectionModal.component";
import TopModalButton from "../../components/TopModalButton/TopModalButton.component";
import useRouteStore from "../../states/Route.store";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";

const ChooseModal = () => {
  const setModalType = useRouteModalStore((state) => state.setModalType);
  const modalType = useRouteModalStore((state) => state.type);
  const loadRoutes = useRouteStore((state) => state.loadRoutes);

  const fromOnPress = () => {
    setModalType(RouteModalType.ToAddress);
  };

  const toOnPress = async () => {
    await loadRoutes();
    setModalType(RouteModalType.VehicleSelection);
  };

  switch (modalType) {
    case RouteModalType.DestinationSelection:
      return <DestinationSelectionModal />;
    case RouteModalType.VehicleSelection:
      return <RouteSelectionModal />;
    case RouteModalType.VehicleConfirmation:
      return <RouteConfirmationModal />;
    case RouteModalType.EndNavigation:
      return <EndNavigationModal />;
    case RouteModalType.FromAddress:
      return (
        <AddressInputModal
          title="From"
          onPress={() => {
            fromOnPress();
          }}
        />
      );
    case RouteModalType.ToAddress:
      return (
        <AddressInputModal
          title="To"
          onPress={() => {
            toOnPress();
          }}
        />
      );
  }
};

const HomeScreen = () => {
  const modalVisible = useRouteModalStore((state) => state.visible);
  const route = useRouteStore((state) => state.route);
  const originAddress = useRouteStore((state) => state.originAddress);
  const destinationAddress = useRouteStore((state) => state.destinationAddress);

  const from = decode(route.polyline);
  const coords = from.map((tuple) => ({
    latitude: tuple[0],
    longitude: tuple[1],
  }));

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Polyline coordinates={coords} strokeWidth={5} strokeColor="black" />
        <Marker
          coordinate={coords[0]}
          title="Origin"
          description={originAddress}
        />
        <Marker
          coordinate={coords[coords.length - 1]}
          title="Destination"
          description={destinationAddress}
        />
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
