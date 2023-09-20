import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import CarbonActivities from "../states/CarbonActivities.state";

const SPEED_LIMIT_IN_METERS_PER_SECOND = 25 / 3.6; // 25 km/h
const VEHICLE_USAGE_PENALTY = -20;

export async function ListenForSpeedChange() {
  // Handling location permissions
  if (!(await Location.getBackgroundPermissionsAsync()).granted) {
    await Location.requestBackgroundPermissionsAsync();
  }

  // Controls whether the user is or isn't in a vehicle
  let isInVehicle = false;

  // Creating a task to run in the background
  TaskManager.defineTask("LOCATION_TRACKER", async ({ data, error }: any) => {
    if (error) {
      return console.warn(error);
    }

    if (data) {
      const speed = data.locations[0].coords.speed;
      // createCarbonActivity("Vehicle usage", VEHICLE_USAGE_PENALTY)

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
  await Location.startLocationUpdatesAsync("LOCATION_TRACKER", {
    accuracy: Location.LocationAccuracy.BestForNavigation,
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: "Carbon",
      notificationBody: "Carbon is tracking your speed",
      notificationColor: "#02D06D",
    },
  });
}
