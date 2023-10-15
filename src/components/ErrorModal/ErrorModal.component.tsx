import { Modal, View, TouchableOpacity, Text } from "react-native";

import { styles } from "./ErrorModal.style";

type ErrorModalProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const ErrorModalComponent = ({ visible, setVisible }: ErrorModalProps) => {
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
