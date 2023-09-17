import { Pressable, Text, View } from "react-native";

import { IRouteModalProps } from "./RouteModal.props";
import { styles } from "./RouteModal.style";

const RouteModal = (props: IRouteModalProps) => {
  const { closeModalFunction } = props;

  return (
    <View style={styles.modalContainer}>
      <Text>Route Modal</Text>
      <Pressable
        onPress={() => closeModalFunction(false)}
        style={styles.modalCloseButton}
      >
        <Text>Close</Text>
      </Pressable>
    </View>
  );
};

export default RouteModal;
