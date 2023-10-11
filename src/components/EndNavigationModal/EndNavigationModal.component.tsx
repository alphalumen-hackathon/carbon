import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./EndNavigationModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import TopModalButton from "../TopModalButton/TopModalButton.component";

const EndNavigationModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setType);
  const setRouteModalVisible = useRouteModalStore((state) => state.toggle);
  const setRoute = useRouteModalStore((state) => state.setRoute);

  return (
    <View style={styles.modalView}>
      <TopModalButton />
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => {
          setRouteModalVisible(false);
          setRouteModalType(RouteModalType.DestinationSelection);
          setRoute({ distance: 0, polyline: "" });
        }}
      >
        <Text style={styles.buttonText}>End Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EndNavigationModal;
