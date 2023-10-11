import { create } from "zustand";

export enum RouteModalType {
  DestinationSelection,
  VehicleSelection,
}

type RouteModalState = {
  visible: boolean;
  type: RouteModalType;
  toggle: (value: boolean) => void;
  setType: (newType: RouteModalType) => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: true,
  type: RouteModalType.DestinationSelection,
  toggle: (value: boolean) => set(() => ({ visible: value })),
  setType: (newType: RouteModalType) => set(() => ({ type: newType })),
}));

export default useRouteModalStore;