import { create } from "zustand";

type RouteModalState = {
  visible: boolean;
  toggle: (value: boolean) => void;
};

const useRouteModalStore = create<RouteModalState>((set) => ({
  visible: false,
  toggle: (value: boolean) => set(() => ({ visible: value })),
}));
