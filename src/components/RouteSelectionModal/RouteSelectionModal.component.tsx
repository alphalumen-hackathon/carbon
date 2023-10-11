import { View, Text, ScrollView } from "react-native";

import { IconArrowLeft } from "./RouteSelectionModal.icons";
import { styles } from "./RouteSelectionModal.style";
import TopModalButton from "../TopModalButton/TopModalButton.component";
import VehicleOption from "../VehicleOption/VehicleOption.component";

const RouteSelectionModal = () => {
  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <View style={styles.headerArea}>
        <IconArrowLeft />
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
