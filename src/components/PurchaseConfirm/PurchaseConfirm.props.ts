import { ImageSourcePropType } from "react-native";

export default interface PurchaseConfirmProps {
  onDismiss: () => void;
  item: {
    name: string;
    price: number;
    image: ImageSourcePropType;
  };
}
