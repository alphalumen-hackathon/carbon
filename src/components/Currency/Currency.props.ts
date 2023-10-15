import { StyleProp, ViewStyle } from "react-native";

export default interface CurrencyProps {
  value: number;
  size: number;
  style?: StyleProp<ViewStyle>;
}
