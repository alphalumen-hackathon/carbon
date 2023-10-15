import { create } from "zustand";

type Activity = {
  description: string;
  credits: number;
  date: Date;
};

type ActivitiesState = {
  activities: Activity[];
  totalCredits: number;
  create: (description: string, credits: number, date: Date) => void;
};

const useActivitiesStore = create<ActivitiesState>((set) => ({
  activities: [],
  totalCredits: 0,

  create: (description: string, credits: number, date: Date) => {
    useActivitiesStore.getState().totalCredits += credits;
    set((state: { activities: Activity[] }) => ({
      activities: [...state.activities, { description, credits, date }],
    }));
  },
}));

export default useActivitiesStore;
