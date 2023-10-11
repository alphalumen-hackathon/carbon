import { useState } from "react";
import { Modal, View } from "react-native";
import MapView from "react-native-maps";

import { styles } from "./Home.style";
import RouteSelectionModal from "../../components/RouteSelectionModal/RouteSelectionModal.component";

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
        <RouteSelectionModal />
      </Modal>
    </View>
  );
};

export default HomeScreen;
