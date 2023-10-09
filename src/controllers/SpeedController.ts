import {
  LocationAccuracy,
  getBackgroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
  startLocationUpdatesAsync,
} from "expo-location";
import { defineTask } from "expo-task-manager";

import CarbonActivities from "../states/CarbonActivities.state";

const SPEED_LIMIT_IN_METERS_PER_SECOND = 50 / 3.6; // 50 km/h
const VEHICLE_USAGE_PENALTY = -20;

type LocationData = { locations: { coords: { speed: number } }[] };

const isLocationEvent = (data: unknown): data is LocationData => {
  return (data as LocationData)?.locations?.length > 0;
};

export async function listenForSpeedChange() {
  // Handling location permissions
  if (!(await getBackgroundPermissionsAsync()).granted) {
    await requestBackgroundPermissionsAsync();
  }

  // Controls whether the user is or isn't in a vehicle
  let isInVehicle = false;

  // Creating a task to run in the background
  defineTask("LOCATION_TRACKER", async ({ data, error }) => {
    if (error) {
      return console.warn(error);
    }

    if (isLocationEvent(data)) {
      const speed = data.locations[0].coords.speed;

      if (speed > SPEED_LIMIT_IN_METERS_PER_SECOND) {
        if (!isInVehicle) {
          // > First time the vehicle is detected

          // Creating an activity
          CarbonActivities.getState().create(
            "Vehicle usage",
            VEHICLE_USAGE_PENALTY,
            new Date(),
          );

          return (isInVehicle = true);
        }
      }

      if (isInVehicle) {
        // Not in vehicle anymore
        return (isInVehicle = false);
      }
    }
  });

  // Adding a updater for the task we've just created
  await startLocationUpdatesAsync("LOCATION_TRACKER", {
    accuracy: LocationAccuracy.BestForNavigation,
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: "Carbon",
      notificationBody: "Carbon is tracking your speed",
      notificationColor: "#02D06D",
    },
  });
}
