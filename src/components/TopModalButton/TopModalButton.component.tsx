import { TouchableOpacity } from "react-native";

import { styles } from "./TopModalButton.style";
import useRouteModalStore from "../../states/RouteModal.store";

const TopModalButton = () => {
  const modalVisible = useRouteModalStore((state) => state.visible);
  const setModalVisible = useRouteModalStore((state) => state.toggle);

  return (
    <TouchableOpacity
      style={styles.topButton}
      hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
      onPress={() => setModalVisible(!modalVisible)}
    />
  );
};

export default TopModalButton;
