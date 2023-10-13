import { create } from "zustand";

export type UserState = {
  isSigned: boolean;
  feed: any;
  setSigned: (value: boolean) => void;
  setFeed: (value: any) => void;
};

const useUserStore = create<UserState>((set) => ({
  isSigned: false,
  feed: [],
  setSigned: (value: boolean) => set(() => ({ isSigned: value })),
  setFeed: (value: any) => set(() => ({ feed: value })),
}));

export default useUserStore;
