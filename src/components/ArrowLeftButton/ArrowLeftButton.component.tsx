import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

import ArrowLeftButtonProps from "./ArrowLeftButton.props";

export const IconArrowLeft = () => (
  <Svg width={33} height={33} viewBox="0 0 33 33" fill="none">
    <Path
      d="M26.125 16.5001C26.125 16.8647 25.9801 17.2145 25.7223 17.4723C25.4644 17.7302 25.1147 17.8751 24.75 17.8751H11.5692L13.3471 19.6529C13.5976 19.9123 13.7362 20.2596 13.733 20.6201C13.7299 20.9806 13.5853 21.3255 13.3304 21.5804C13.0754 21.8354 12.7306 21.98 12.37 21.9831C12.0095 21.9863 11.6622 21.8477 11.4029 21.5972L7.27787 17.4722C7.0201 17.2143 6.87529 16.8647 6.87529 16.5001C6.87529 16.1355 7.0201 15.7858 7.27787 15.5279L11.4029 11.4029C11.6622 11.1525 12.0095 11.0139 12.37 11.017C12.7306 11.0202 13.0754 11.1648 13.3304 11.4197C13.5853 11.6746 13.7299 12.0195 13.733 12.38C13.7362 12.7405 13.5976 13.0879 13.3471 13.3472L11.5692 15.1251H24.75C25.1147 15.1251 25.4644 15.2699 25.7223 15.5278C25.9801 15.7857 26.125 16.1354 26.125 16.5001Z"
      fill="#02D06D"
    />
  </Svg>
);

const ArrowLeftButton = (props: ArrowLeftButtonProps) => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <IconArrowLeft />
    </TouchableOpacity>
  );
};

export default ArrowLeftButton;
