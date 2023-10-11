import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./EndNavigationModal.style";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";

const EndNavigationModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setType);
  const setRouteModalVisible = useRouteModalStore((state) => state.toggle);

  return (
    <View style={styles.modalView}>
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => {
          setRouteModalVisible(false);
          setRouteModalType(RouteModalType.DestinationSelection);
        }}
      >
        <Text style={styles.buttonText}>End Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EndNavigationModal;
