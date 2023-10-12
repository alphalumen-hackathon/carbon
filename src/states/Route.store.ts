import { LatLng } from "react-native-maps";
import { create } from "zustand";

import { requestRoute } from "../helper/routeRequest";

export type Route = {
  distance: number;
  polyline: string;
};

type RouteState = {
  destinationCoords: LatLng;
  originCoords: LatLng;
  originAddress: string;
  destinationAddress: string;
  route: Route;
  chooseVehicle: string;
  choosenCredits: number;
  setDestinationCoords: (coords: LatLng) => void;
  setRoute: (route: Route) => void;
  setChoosenVehicle: (vehicle: string) => void;
  setChoosenCredits: (credits: number) => void;
  setOriginAddress: (addr: string) => void;
  setDestinationAddress: (addr: string) => void;

  loadRoutes: () => void;
};

const useRouteStore = create<RouteState>((set) => ({
  destinationCoords: { latitude: 0, longitude: 0 },
  originCoords: { latitude: 0, longitude: 0 },
  originAddress: "",
  destinationAddress: "",
  route: { distance: 0, polyline: "" },
  chooseVehicle: "",
  choosenCredits: 0,
  setDestinationCoords: (coords: LatLng) =>
    set(() => ({ destinationCoords: coords })),
  setRoute: (route: Route) => set(() => ({ route })),
  setChoosenVehicle: (vehicle: string) =>
    set(() => ({ chooseVehicle: vehicle })),
  setChoosenCredits: (credits: number) =>
    set(() => ({ choosenCredits: credits })),
  setOriginAddress: (addr: string) => set(() => ({ originAddress: addr })),
  setDestinationAddress: (addr: string) =>
    set(() => ({ destinationAddress: addr })),
  loadRoutes: async () => {
    // Remove this and get current location
    const origin = useRouteStore.getState().originAddress.replace(/ /g, "+");
    const originGeoResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=AIzaSyCirXsoS-iH2CgbrfVPvnJB65cNHWmRhf0`,
    );
    const originData = await (await fetch(originGeoResponse.url)).json();
    const originCoordsResponse = originData.results[0].geometry.location;

    const originCoords: LatLng = {
      latitude: originCoordsResponse.lat,
      longitude: originCoordsResponse.lng,
    };

    const destination = useRouteStore
      .getState()
      .destinationAddress.replace(/ /g, "+");
    const destinationGeoResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=AIzaSyCirXsoS-iH2CgbrfVPvnJB65cNHWmRhf0`,
    );
    const destinationData = await (
      await fetch(destinationGeoResponse.url)
    ).json();
    const destinationCoordsResponse =
      destinationData.results[0].geometry.location;

    const destinationCoords: LatLng = {
      latitude: destinationCoordsResponse.lat,
      longitude: destinationCoordsResponse.lng,
    };

    const val = await requestRoute(originCoords, destinationCoords, "DRIVE");

    useRouteStore.getState().setRoute({
      distance: val.routes[0].distanceMeters,
      polyline: val.routes[0].polyline.encodedPolyline,
    });

  },


}));

export default useRouteStore;
