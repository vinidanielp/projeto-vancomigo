import {Spot} from '@app/models/spot';

export type SpotRowProps = {
  onPress?: () => void;
  spot: Spot;
};
