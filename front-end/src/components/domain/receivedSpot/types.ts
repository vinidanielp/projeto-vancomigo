import {Spot} from '@app/models/spot';

export type ReceivedSpotRowProps = {
  onPress?: () => void;
  spot: Spot;
};
