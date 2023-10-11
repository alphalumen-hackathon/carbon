import { View, Text, ScrollView } from "react-native";

import { styles } from "./RouteSelectionModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import {
  bicycleMultiplier,
  carMultiplier,
  motorcycleMultiplier,
  walkMultiplier,
} from "../../vehicleMultiplier";
import ArrowLeftButton from "../ArrowLeftButton/ArrowLeftButton.component";
import TopModalButton from "../TopModalButton/TopModalButton.component";
import VehicleOption from "../VehicleOption/VehicleOption.component";

const RouteSelectionModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setType);
  const routeDistance = useRouteModalStore((state) => state.route.distance);

  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <View style={styles.headerArea}>
        <ArrowLeftButton
          onPress={() => setRouteModalType(RouteModalType.DestinationSelection)}
        />
        <Text style={styles.headerText}>Choose a vehicle</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{ width: "100%" }}
      >
        <View style={styles.row}>
          <VehicleOption
            vehicleName="Car"
            credits={Math.round(routeDistance * carMultiplier)}
            iconName="car"
          />
          <VehicleOption
            vehicleName="Walking"
            credits={Math.round(routeDistance * walkMultiplier)}
            iconName="walking"
          />
        </View>
        <View style={styles.row}>
          <VehicleOption
            vehicleName="Motorcycle"
            credits={Math.round(routeDistance * motorcycleMultiplier)}
            iconName="motorcycle"
          />
          <VehicleOption
            vehicleName="Bicycle"
            credits={Math.round(routeDistance * bicycleMultiplier)}
            iconName="bicycle"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RouteSelectionModal;
