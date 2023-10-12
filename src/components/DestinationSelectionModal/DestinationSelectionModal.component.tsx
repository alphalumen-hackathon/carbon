import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./DestinationSelectionModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import FavoriteLocation from "../FavoriteLocation/FavoriteLocation.component";
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
      <FavoriteLocation name="Av. São João" distance={147} />
      <FavoriteLocation name="Rio de Janeiro" distance={264.5} />
    </View>
  );
};

export default DestinationSelectionModal;
