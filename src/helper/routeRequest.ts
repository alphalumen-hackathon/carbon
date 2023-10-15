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
      // One hour in the future.
      // The API doesn't accept a departure time before the current time.
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
