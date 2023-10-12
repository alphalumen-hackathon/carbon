import { create } from "zustand";

export enum RouteModalType {
  DestinationSelection,
  VehicleSelection,
  VehicleConfirmation,
  EndNavigation,
}

type RouteModalState = {
  visible: boolean;
  type: RouteModalType;
  setVisibile: (value: boolean) => void;
  setType: (newType: RouteModalType) => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: true,
  type: RouteModalType.DestinationSelection,
  setVisibile: (value: boolean) => set(() => ({ visible: value })),
  setType: (newType: RouteModalType) => set(() => ({ type: newType })),
}));

export default useRouteModalStore;
