import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./EndNavigationModal.style";
import useRouteStore from "../../states/Route.store";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";
import TopModalButton from "../TopModalButton/TopModalButton.component";

const EndNavigationModal = () => {
  const setRouteModalType = useRouteModalStore((state) => state.setModalType);
  const setRouteModalVisible = useRouteModalStore((state) => state.setVisibile);
  const setRoute = useRouteStore((state) => state.setRoute);

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
