import { TextInput, View } from "react-native";

import { ILocationInputProps } from "./LocationInput.props";
import { styles } from "./LocationInput.style";

const LocationInput = (props: ILocationInputProps) => {
  const { savedLocation, placeholder, containerStyle } = props;

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput value={savedLocation} placeholder={placeholder} />
    </View>
  );
};

export default LocationInput;
