import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";

import { styles } from "./Route.style";

const Route = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable
      style={styles.externContainer}
      onPress={() => setModalVisible(true)}
    >
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>Route Modal</Text>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.modalCloseButton}
          >
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={styles.container}>
        <View>
          <FontAwesome5 name="car-side" size={24} color="black" />
        </View>
        <View style={styles.carbonDisplayColumn}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text>-50</Text>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text>Show More...</Text>
      </View>
    </Pressable>
  );
};

export default Route;
