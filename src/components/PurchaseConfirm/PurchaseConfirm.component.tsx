import { useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal } from "react-native";

import PurchaseConfirmProps from "./PurchaseConfirm.props";
import { styles } from "./PurchaseConfirm.style";
import { createLog } from "../../http/requests";
import useActivitiesStore from "../../states/Activities.store";
import Currency from "../Currency/Currency.component";

const StatementLine = ({ title, value }: { title: string; value: number }) => (
  <View style={styles.statementLine}>
    <Text style={styles.statementLineTitle}>{title}</Text>
    <Currency value={value} size={15} />
  </View>
);

const ConfirmModal = ({ item, onDismiss }: PurchaseConfirmProps) => {
  const [visible, setVisible] = useState(true);
  const balance = useActivitiesStore((state) => state.totalCredits);
  const canPurchase = balance >= item.price;
  const createActivity = useActivitiesStore((state) => state.create);

  const close = () => {
    setVisible(false);
    onDismiss();
  };

  const buyItem = () => {
    if (canPurchase) {
      createLog(-item.price, `Bought ${item.name}`);
      createActivity(`Bought ${item.name}`, -item.price, new Date());
      close();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={close}
    >
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.modalTopButton} onPress={close} />

        <View style={styles.information}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.statement}>
            <Text style={styles.productName}>Coffee Cup</Text>

            <View style={styles.values}>
              <StatementLine title="Balance" value={balance} />
              <StatementLine title="Cost" value={-item.price} />
              <View style={styles.divisor} />
              <StatementLine title="New balance" value={balance - item.price} />
            </View>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={[
              styles.confirmationButton,
              !canPurchase && { backgroundColor: "#964242" },
            ]}
            onPress={buyItem}
          >
            <Text style={styles.confirmText}>
              {balance >= item.price ? "Confirm" : "Not enough credits"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={close}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
