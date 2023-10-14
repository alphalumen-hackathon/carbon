import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import AddressAutocompleteInputProps from "./AddressAutocompleteInput.props";

const AddressAutocompleteInput = (props: AddressAutocompleteInputProps) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={props.placeholder}
      styles={props.style}
      query={{
        key: process.env.GOOGLE_PLACES_API_KEY,
        language: "en-US",
      }}
      onPress={(data) => props.onSelected(data.description)}
    />
  );
};

export default AddressAutocompleteInput;
