import { RouteData } from "../../interfaces/RouteData";

export interface IRouteModalProps {
  closeModalFunction: (state: boolean) => any;
  routeData: RouteData;
}
