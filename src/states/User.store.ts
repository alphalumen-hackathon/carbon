import { create } from "zustand";

export type UserState = {
  isSigned: boolean;
  feed: any;
  username: string;
  setSigned: (value: boolean) => void;
  setFeed: (value: any) => void;
  setUsername: (value: string) => void;
};

const useUserStore = create<UserState>((set) => ({
  isSigned: false,
  feed: [],
  username: "",
  setSigned: (value: boolean) => set(() => ({ isSigned: value })),
  setFeed: (value: any) => set(() => ({ feed: value })),
  setUsername: (value: string) => set(() => ({ username: value })),
}));

export default useUserStore;
