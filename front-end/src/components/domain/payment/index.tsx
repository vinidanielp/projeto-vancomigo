import AppAssets from '@app/config/assets';
import {FAKE_LOGGED_USER} from '@app/config/user';
import {UserType} from '@app/models/user';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {Container, PaidContainer, PaidText, PayButton, Text} from './styles';
import {PaymentRowProps} from './types';

const PaymentRow = ({onPress, payment}: PaymentRowProps) => {
  const isLoggedUserDriver = FAKE_LOGGED_USER.type === UserType.DRIVER;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text>{payment.month}</Text>
        {payment.paid && (
          <PaidContainer onPress={onPress}>
            <PaidText>Pago</PaidText>
            <SvgXml width="25" height="17" xml={AppAssets.search} />
          </PaidContainer>
        )}
        {!isLoggedUserDriver && !payment.paid && (
          <PayButton onPress={onPress}>
            <Text>Pagar</Text>
          </PayButton>
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default PaymentRow;
