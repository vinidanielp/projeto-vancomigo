import {Payment} from '@app/models/payment';

export type PaymentRowProps = {
  onPress?: () => void;
  payment: Payment;
};
