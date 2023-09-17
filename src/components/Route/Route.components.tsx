import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";

import { IRouteProps } from "./Route.props";
import { styles } from "./Route.style";
import RouteModal from "../RouteModal/RouteModal.component";

const Route = (props: IRouteProps) => {
  const { vehicleIconsData } = props.routeData;
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
        <RouteModal closeModalFunction={setModalVisible} />
      </Modal>
      <View style={styles.container}>
        <View>{vehicleIconsData}</View>
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
