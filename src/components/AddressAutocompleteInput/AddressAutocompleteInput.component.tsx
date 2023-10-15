import { Ref, forwardRef } from "react";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import AddressAutocompleteInputProps from "./AddressAutocompleteInput.props";

const AddressAutocompleteInput = (
  props: AddressAutocompleteInputProps,
  ref: Ref<GooglePlacesAutocompleteRef>,
) => {
  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={props.placeholder}
      styles={props.style}
      query={{
        key: "AIzaSyCirXsoS-iH2CgbrfVPvnJB65cNHWmRhf0",
        language: "en-US",
      }}
      onPress={(data) => props.onSelected(data.description)}
    />
  );
};

export default forwardRef(AddressAutocompleteInput);
