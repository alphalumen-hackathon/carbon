import { ImageSourcePropType } from "react-native";

export default interface ProductCardProps {
  item: {
    name: string;
    price: number;
    image: ImageSourcePropType;
  };
  onPress: () => void;
}
