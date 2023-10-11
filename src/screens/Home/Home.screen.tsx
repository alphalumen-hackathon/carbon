import { Modal, View } from "react-native";
import MapView from "react-native-maps";

import { styles } from "./Home.style";
import DestinationSelectionModal from "../../components/DestinationSelectionModal/DestinationSelectionModal.component";
import RouteSelectionModal from "../../components/RouteSelectionModal/RouteSelectionModal.component";
import TopModalButton from "../../components/TopModalButton/TopModalButton.component";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";

const ChooseModal = () => {
  const modalType = useRouteModalStore((state) => state.type);
  if (modalType === RouteModalType.DestinationSelection) {
    return <DestinationSelectionModal />;
  } else {
    return <RouteSelectionModal />;
  }
};

const HomeScreen = () => {
  const modalVisible = useRouteModalStore((state) => state.visible);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={styles.modal}
        transparent
      >
        {ChooseModal()}
      </Modal>
      <View style={styles.openModal}>
        <TopModalButton />
      </View>
    </View>
  );
};

export default HomeScreen;
