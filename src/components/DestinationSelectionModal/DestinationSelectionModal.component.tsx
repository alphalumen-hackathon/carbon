import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./DestinationSelectionModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import TopModalButton from "../TopModalButton/TopModalButton.component";

const DestinationSelectionModal = () => {
  const setModalType = useRouteModalStore((state) => state.setModalType);

  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => setModalType(RouteModalType.FromAddress)}
      >
        <Text style={{ color: "#BEBEBE" }}>Where are we going?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DestinationSelectionModal;
