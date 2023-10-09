import { create } from "zustand";

type Activity = {
  description: string;
  credits: number;
  date: Date;
};

interface IActivitiesStore {
  activities: Activity[];
  create: (description: string, credits: number, date: Date) => void;
}

const activitiesStore = create<IActivitiesStore>((set) => ({
  activities: [
    { description: "Monthly credits", credits: 200, date: new Date() },
  ],

  create: (description: string, credits: number, date: Date) => {
    set((state: { activities: Activity[] }) => ({
      activities: [...state.activities, { description, credits, date }],
    }));
  },
}));

export default activitiesStore;
