import { create } from "zustand";

export type UserState = {
  isSigned: boolean;
  setSigned: (value: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  isSigned: false,
  setSigned: (value: boolean) => set(() => ({ isSigned: value })),
}));

export default useUserStore;
