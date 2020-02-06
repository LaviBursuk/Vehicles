import { CarType } from "./carType.enum"

export class Vehicle{
  id: string;
  name: string;
  createdTime: number;
  carType: CarType;
  lastSuccessfulConnection: number;
}
