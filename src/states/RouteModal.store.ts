import { LatLng } from "react-native-maps";
import { create } from "zustand";

import { requestRoute } from "../helper/routeRequest";

export enum RouteModalType {
  DestinationSelection,
  VehicleSelection,
  VehicleConfirmation,
}

type RouteModalState = {
  visible: boolean;
  type: RouteModalType;
  destinationCoords: LatLng;
  routePolyline: string | null;
  toggle: (value: boolean) => void;
  setType: (newType: RouteModalType) => void;
  setDestinationCoords: (coords: LatLng) => void;
  setRoutePolyline: (polyline: string) => void;
  loadRoutes: () => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: true,
  type: RouteModalType.DestinationSelection,
  destinationCoords: { latitude: 0, longitude: 0 },
  routePolyline: "",
  toggle: (value: boolean) => set(() => ({ visible: value })),
  setType: (newType: RouteModalType) => set(() => ({ type: newType })),
  setRoutePolyline: (polyline: string) =>
    set(() => ({ routePolyline: polyline })),
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

    useRouteModalStore
      .getState()
      .setRoutePolyline(val.routes[0].polyline.encodedPolyline);
  },
  setDestinationCoords: (coords: LatLng) =>
    set(() => ({ destinationCoords: coords })),
}));

export default useRouteModalStore;
