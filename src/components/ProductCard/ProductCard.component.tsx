import { Image, Text, TouchableOpacity, View } from "react-native";

import ProductCardProps from "./ProductCard.props";
import styles from "./ProductCard.style";
import Currency from "../Currency/Currency.component";

const ProductCard = ({ item, onPress }: ProductCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.image} source={item.image} />

          <View style={styles.bottom}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.tapToExchange}>Tap to exchange</Text>
          </View>

          <View style={styles.priceTag}>
            <Currency value={item.price} size={20} />
          </View>
        </View>

        <TouchableOpacity style={styles.touchable} onPress={onPress} />
      </View>
    </>
  );
};

export default ProductCard;
