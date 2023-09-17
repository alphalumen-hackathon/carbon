import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import { ILocationInputProps } from "./LocationInput.props";
import { styles } from "./LocationInput.style";

const LocationInput = (props: ILocationInputProps) => {
  const { savedLocation, placeholder, containerStyle } = props;
  const [text, setText] = useState(savedLocation);

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        style={styles.input}
      />
      <TouchableHighlight onPress={() => setText("")} underlayColor="#ffffff">
        <AntDesign name="closecircleo" size={18} color="black" />
      </TouchableHighlight>
    </View>
  );
};

export default LocationInput;
