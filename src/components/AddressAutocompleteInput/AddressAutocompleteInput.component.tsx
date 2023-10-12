import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import AddressAutocompleteInputProps from "./AddressAutocompleteInput.props";

const AddressAutocompleteInput = (props: AddressAutocompleteInputProps) => {
  const { style, placeholder, onSelected } = props;

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      styles={style}
      query={{
        key: "AIzaSyCirXsoS-iH2CgbrfVPvnJB65cNHWmRhf0",
        language: "pt-BR",
      }}
      onPress={(data, details = null) => {
        onSelected(data.description);
      }}
    />
  );
};

export default AddressAutocompleteInput;
