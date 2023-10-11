import { View, Text, ScrollView } from "react-native";

import { styles } from "./RouteSelectionModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import ArrowLeftButton from "../ArrowLeftButton/ArrowLeftButton.component";
import TopModalButton from "../TopModalButton/TopModalButton.component";
import VehicleOption from "../VehicleOption/VehicleOption.component";

const RouteSelectionModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setType);

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
          <VehicleOption vehicleName="Car" credits={-40} />
          <VehicleOption vehicleName="Ride-sharing" credits={23} />
        </View>
        <View style={styles.row}>
          <VehicleOption vehicleName="Car" credits={-40} />
          <VehicleOption vehicleName="Ride-sharing" credits={23} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RouteSelectionModal;
