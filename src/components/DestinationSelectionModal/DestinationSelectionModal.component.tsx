import { View, TextInput } from "react-native";

import { styles } from "./DestinationSelectionModal.style";
import FavoriteLocation from "../FavoriteLocation/FavoriteLocation.component";
import TopModalButton from "../TopModalButton/TopModalButton.component";

const DestinationSelectionModal = () => {
  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <TextInput placeholder="Where are we going?" style={styles.inputBox} />
      <FavoriteLocation name="Av. São João" distance={3.4} />
      <FavoriteLocation name="Rio de Janeiro" distance={264.5} />
    </View>
  );
};

export default DestinationSelectionModal;
