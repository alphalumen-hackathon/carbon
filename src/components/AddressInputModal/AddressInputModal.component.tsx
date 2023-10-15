import { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { Svg, Path } from "react-native-svg";

import AddressInputModalProps from "./AddressInputModal.props";
import { styles } from "./AddressInputModal.style";
import useRouteStore from "../../states/Route.store";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import AddressAutocompleteInput from "../AddressAutocompleteInput/AddressAutocompleteInput.component";

const AddressInputModal = (props: AddressInputModalProps) => {
  const { title, onPress } = props;

  const addressRef = useRef<GooglePlacesAutocompleteRef>(null);

  const { setOriginAddress, setDestinationAddress } = useRouteStore(
    (state) => ({
      setOriginAddress: state.setOriginAddress,
      setDestinationAddress: state.setDestinationAddress,
    }),
  );

  const { setModalType, setModalVisible } = useRouteModalStore((state) => ({
    setModalType: state.setModalType,
    setModalVisible: state.setVisible,
  }));

  // Handle location selection
  const onLocationSelected = (addr: string) => {
    if (title.toLowerCase() === "from") {
      setOriginAddress(addr);
    } else if (title.toLowerCase() === "to") {
      setDestinationAddress(addr);
    }
  };

  return (
    <View style={styles.modalView}>
      <View style={styles.inputArea}>
        <Text style={styles.fromText}>{title}</Text>
        <AddressAutocompleteInput
          ref={addressRef}
          style={{
            container: styles.inputBoxContainer,
            textInput: styles.inputBoxTextArea,
            row: styles.row,
            description: styles.description,
          }}
          placeholder="Tap to write"
          onSelected={onLocationSelected}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          margin: 10,
          marginRight: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
            setModalType(RouteModalType.DestinationSelection);
          }}
          style={{
            backgroundColor: "#353535",
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
            padding: 7,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#BEBEBE", fontWeight: "bold" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            onPress();
            if (title.toLowerCase() === "from") {
              addressRef.current?.setAddressText("");
            }
          }}
        >
          <Svg width={30} height={30} viewBox="0 0 24 17" fill="none">
            <Path
              d="M23.8125 8.50002L0.187502 0.21643L5.2875 8.50002L0.187501 16.7836L23.8125 8.50002ZM19.9875 8.50002L3.2625 14.3578L6.88125 8.50002L19.9875 8.50002Z"
              fill="#02D06D"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressInputModal;
