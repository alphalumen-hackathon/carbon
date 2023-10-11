import { LatLng } from "react-native-maps";
import { create } from "zustand";

import { requestRoute } from "../helper/routeRequest";

export enum RouteModalType {
  DestinationSelection,
  VehicleSelection,
  VehicleConfirmation,
}

export type Route = {
  distance: number;
  polyline: string;
};

type RouteModalState = {
  visible: boolean;
  type: RouteModalType;
  destinationCoords: LatLng;
  route: Route;
  toggle: (value: boolean) => void;
  setType: (newType: RouteModalType) => void;
  setDestinationCoords: (coords: LatLng) => void;
  setRoute: (route: Route) => void;
  loadRoutes: () => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: true,
  type: RouteModalType.DestinationSelection,
  destinationCoords: { latitude: 0, longitude: 0 },
  route: { distance: 2, polyline: "" },
  toggle: (value: boolean) => set(() => ({ visible: value })),
  setType: (newType: RouteModalType) => set(() => ({ type: newType })),
  setRoute: (route: Route) => set(() => ({ route })),
  loadRoutes: async () => {
    const currentCoords: LatLng = {
      latitude: -22.2497711,
      longitude: -45.708548,
    };

    const val = await requestRoute(
      currentCoords,
      useRouteModalStore.getState().destinationCoords,
      "DRIVE",
    );

    useRouteModalStore.getState().setRoute({
      distance: 2,
      polyline: val.routes[0].polyline.encodedPolyline,
    });
  },
  setDestinationCoords: (coords: LatLng) =>
    set(() => ({ destinationCoords: coords })),
}));

export default useRouteModalStore;
