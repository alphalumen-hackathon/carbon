import { create } from "zustand";

interface Activity {
  description: string;
  credits: number;
  date: Date;
}

interface ICarbonActivities {
  activities: Activity[];
  create: (description: string, credits: number, date: Date) => void;
}

const CarbonActivities = create<ICarbonActivities>((set) => ({
  activities: [],

  create: (description: string, credits: number, date: Date) => {
    set((state: { activities: Activity[] }) => ({
      activities: [...state.activities, { description, credits, date }],
    }));
  },
}));

export default CarbonActivities;
