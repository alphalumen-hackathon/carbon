import { create } from "zustand";

export enum RouteModalType {
  DestinationSelection,
  VehicleSelection,
  VehicleConfirmation,
  EndNavigation,
  FromAddress,
  ToAddress,
}

type RouteModalState = {
  visible: boolean;
  type: RouteModalType;
  setVisible: (value: boolean) => void;
  setModalType: (newType: RouteModalType) => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: true,
  type: RouteModalType.DestinationSelection,
  setVisible: (value: boolean) => set(() => ({ visible: value })),
  setModalType: (newType: RouteModalType) => set(() => ({ type: newType })),
}));

export default useRouteModalStore;
