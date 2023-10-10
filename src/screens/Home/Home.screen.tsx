import { useState } from "react";
import { Modal, View } from "react-native";
import MapView from "react-native-maps";

import { styles } from "./Home.style";
import DestinationSelectionModal from "../../components/DestinationSelectionModal/DestinationSelectionModal.component";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={styles.modal}
        transparent
      >
        <DestinationSelectionModal />
      </Modal>
    </View>
  );
};

export default HomeScreen;
