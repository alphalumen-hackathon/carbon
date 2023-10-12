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
  route: Route;
  chooseVehicle: string;
  choosenCredits: number;
  setDestinationCoords: (coords: LatLng) => void;
  setRoute: (route: Route) => void;
  setChoosenVehicle: (vehicle: string) => void;
  setChoosenCredits: (credits: number) => void;
  loadRoutes: () => void;
};

const useRouteStore = create<RouteState>((set) => ({
  destinationCoords: { latitude: 0, longitude: 0 },
  originCoords: { latitude: 0, longitude: 0 },
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
  loadRoutes: async () => {
    // Remove this and get current location
    const currentCoords: LatLng = {
      latitude: -22.2497711,
      longitude: -45.708548,
    };

    const val = await requestRoute(
      currentCoords,
      useRouteStore.getState().destinationCoords,
      "DRIVE",
    );

    useRouteStore.getState().setRoute({
      distance: val.routes[0].distanceMeters,
      polyline: val.routes[0].polyline.encodedPolyline,
    });
  },
}));

export default useRouteStore;
