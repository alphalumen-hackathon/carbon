import { View, TouchableOpacity, TextInput } from "react-native";

import { styles } from "./DestinationSelectionModal.style";

const DestinationSelectionModal = () => {
  return (
    <View style={styles.modalView}>
      <TouchableOpacity style={styles.topButton} />
      <TextInput placeholder="Where are we going?" style={styles.inputBox} />
    </View>
  );
};

export default DestinationSelectionModal;
