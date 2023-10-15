import { Modal, View, TouchableOpacity, Text } from "react-native";

import ErrorModalProps from "./ErroModal.props";
import { styles } from "./ErrorModal.style";

const ErrorModalComponent = (props: ErrorModalProps) => {
  const { visible, setVisible } = props;

  return (
    <Modal visible={visible} style={styles.modal} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalErrorArea}>
          <Text style={styles.modalErrorText}>Invalid values provided.</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setVisible(false)}
          >
            <Text style={{ color: "white" }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModalComponent;
