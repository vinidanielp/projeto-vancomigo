import {Spot} from '@app/models/spot';

export type RequestedSpotRowProps = {
  onPress?: () => void;
  spot: Spot;
};
