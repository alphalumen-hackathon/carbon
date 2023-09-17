import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";

import { IRouteProps } from "./Route.props";
import { styles } from "./Route.style";
import RouteModal from "../RouteModal/RouteModal.component";

const Route = (props: IRouteProps) => {
  const { vehicleIconsData, carbonValue } = props.routeData;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable
      style={styles.externContainer}
      onPress={() => setModalVisible(true)}
    >
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <RouteModal
            closeModalFunction={setModalVisible}
            routeData={props.routeData}
          />
        </Modal>
        <View style={styles.vehicleIconsContainer}>{vehicleIconsData}</View>
        <View style={styles.carbonDisplayColumn}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text>{String(carbonValue)}</Text>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text>Show More...</Text>
      </View>
    </Pressable>
  );
};

export default Route;
