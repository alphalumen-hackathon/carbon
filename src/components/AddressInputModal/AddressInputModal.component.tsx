import { View, Text, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

import AddressInputModalProps from "./AddressInputModal.props";
import { styles } from "./AddressInputModal.style";
import useRouteStore from "../../states/Route.store";
import AddressAutocompleteInput from "../AddressAutocompleteInput/AddressAutocompleteInput.component";

const AddressInputModal = (props: AddressInputModalProps) => {
  const { title, onPress } = props;
  const setOriginAddress = useRouteStore((state) => state.setOriginAddress);
  const setDestinationAddress = useRouteStore(
    (state) => state.setDestinationAddress,
  );

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
          style={{
            container: styles.inputBoxContainer,
            textInput: styles.inputBoxTextArea,
            row: styles.row,
            description: styles.description,
          }}
          placeholder="Tap to write"
          onSelected={(addr: string) => onLocationSelected(addr)}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          margin: 10,
          marginRight: 20,
        }}
      >
        <TouchableOpacity style={styles.touchable} onPress={() => onPress()}>
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
