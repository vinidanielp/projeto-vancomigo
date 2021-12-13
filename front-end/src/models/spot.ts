import {Driver} from './driver';
import {Passenger} from './passenger';

export enum SpotStatus {
  APPROVED = 'Aprovado',
  DENIED = 'Recusado',
  AWAITING = 'Em Analise',
}

export type Spot = {
  name: string;
  driver?: Driver;
  status?: SpotStatus;
  passenger?: Passenger;
};
