import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

import { styles } from "./RouteConfirmationModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import ArrowLeftButton from "../ArrowLeftButton/ArrowLeftButton.component";
import TopModalButton from "../TopModalButton/TopModalButton.component";

const VehicleWidget = () => (
  <View style={styles.vehicleContainer}>
    <View style={styles.vehicleHeader}>
      <Text style={styles.vehicleHeaderText}>Car</Text>
    </View>
    <View style={styles.vehicleMiddle}>
      <FontAwesome5 name="car-side" size={60} color="white" />
    </View>
  </View>
);

const IconCarbonCredits = (color: string) => (
  <Svg width={30} height={40} viewBox="0 0 34 47" fill="none">
    <Path
      d="M16.0898 35.3912C14.0644 35.3912 12.3129 34.9609 10.8351 34.1003C9.36605 33.2311 8.23167 32.0228 7.43194 30.4755C6.63222 28.9195 6.23236 27.1158 6.23236 25.0643C6.23236 22.9955 6.63222 21.1874 7.43194 19.6401C8.23167 18.0842 9.36605 16.8759 10.8351 16.0153C12.3129 15.1461 14.0644 14.7114 16.0898 14.7114C18.1152 14.7114 19.8624 15.1461 21.3314 16.0153C22.8092 16.8759 23.9479 18.0842 24.7476 19.6401C25.5474 21.1874 25.9472 22.9955 25.9472 25.0643C25.9472 27.1158 25.5474 28.9195 24.7476 30.4755C23.9479 32.0228 22.8092 33.2311 21.3314 34.1003C19.8624 34.9609 18.1152 35.3912 16.0898 35.3912ZM16.1159 31.0883C17.0373 31.0883 17.8066 30.8275 18.4238 30.306C19.0409 29.7757 19.506 29.0542 19.8189 28.1415C20.1406 27.2288 20.3014 26.19 20.3014 25.0252C20.3014 23.8604 20.1406 22.8216 19.8189 21.9089C19.506 20.9962 19.0409 20.2747 18.4238 19.7444C17.8066 19.2142 17.0373 18.9491 16.1159 18.9491C15.1858 18.9491 14.4034 19.2142 13.7689 19.7444C13.143 20.2747 12.6692 20.9962 12.3476 21.9089C12.0347 22.8216 11.8782 23.8604 11.8782 25.0252C11.8782 26.19 12.0347 27.2288 12.3476 28.1415C12.6692 29.0542 13.143 29.7757 13.7689 30.306C14.4034 30.8275 15.1858 31.0883 16.1159 31.0883Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.0896 20.8705C28.1308 21.0242 28.169 21.1779 28.2042 21.3318L27.9582 20.4137C28.0046 20.5645 28.0484 20.7168 28.0896 20.8705ZM12.5379 11.8917C17.0787 10.675 21.7043 12.0803 24.8074 15.1794L22.8805 15.6957C20.2138 13.4408 16.5225 12.4858 12.8937 13.4581C9.26486 14.4305 6.54569 17.1032 5.3637 20.3893L3.55611 20.8737C4.69386 16.6382 7.99715 13.1084 12.5379 11.8917Z"
      fill={color}
    />
  </Svg>
);

const RouteConfirmationModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setType);

  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <View style={styles.headerArea}>
        <ArrowLeftButton
          onPress={() => setRouteModalType(RouteModalType.VehicleSelection)}
        />
      </View>

      <View style={styles.infoRow}>
        <VehicleWidget />
        <View style={styles.destinationInfo}>
          <View style={styles.locationInfoArea}>
            <View style={styles.locationEllipse}>
              <Ionicons name="location-outline" size={24} color="#02D06D" />
            </View>
            <View style={styles.locationInfoTextArea}>
              <Text style={styles.destinationText}>Av. São João</Text>
              <Text style={styles.distanceText}>3.4 km</Text>
            </View>
          </View>
          <View style={styles.carbonCreditsInfo}>
            <View style={styles.carbonIconValue}>
              {IconCarbonCredits("#EF3838")}
              <Text
                style={{ color: "#EF3838", fontWeight: "bold", fontSize: 20 }}
              >
                -70
              </Text>
            </View>

            <Text
              style={{ color: "#EF3838", fontWeight: "bold", fontSize: 12 }}
            >
              carbon credits
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.confirmationButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RouteConfirmationModal;
