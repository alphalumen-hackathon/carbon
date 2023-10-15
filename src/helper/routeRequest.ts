import { LatLng } from "react-native-maps";

export const requestRoute = async (
  origin: LatLng,
  destination: LatLng,
  travelMode: string,
): Promise<any> => {
  const requestObject = {
    origin: {
      location: {
        latLng: origin,
      },
    },
    destination: {
      location: {
        latLng: destination,
      },
    },
    travelMode,
    routingPreference: "TRAFFIC_AWARE",
    departureTime: new Date(
      // Set the departure time for the route request.
      // It's set to one hour in the future from the current time to ensure
      // it's valid, as the API doesn't accept departure times in the past.
      new Date().getTime() + 60 * 60 * 1000,
    ).toISOString(),
    computeAlternativeRoutes: false,
    routeModifiers: {
      avoidTolls: false,
      avoidHighways: false,
      avoidFerries: false,
    },
    languageCode: "en-US",
    units: "METRIC",
  };

  // Make a POST request to the Google Maps Directions API to compute the route.
  const response = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyCirXsoS-iH2CgbrfVPvnJB65cNHWmRhf0",
        "X-Goog-FieldMask":
          "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
      },
      body: JSON.stringify(requestObject),
    },
  );

  return response.json();
};
