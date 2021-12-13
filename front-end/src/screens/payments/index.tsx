import PaymentRow from '@app/components/domain/payment';
import AppFormInput from '@app/components/form/input';
import AppAssets from '@app/config/assets';
import {FAKE_LOGGED_USER} from '@app/config/user';
import {UserType} from '@app/models/user';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {Container, ImagePreview} from './styles';

const PaymentsScreen = () => {
  const formMethods = useForm();
  const isLoggedUserDriver = FAKE_LOGGED_USER.type === UserType.DRIVER;

  return (
    <ScrollView>
      <Container>
        <ImagePreview
          source={AppAssets.defaultProfilePicture}
          resizeMode="cover"
        />
        <FormProvider {...formMethods}>
          <AppFormInput
            name="time"
            label="Horário"
            inputProps={{
              placeholder: '18hrs as 22 hrs',
              style: {marginBottom: 10},
            }}
          />
          <AppFormInput
            name="period"
            label="Turno Contratado"
            inputProps={{placeholder: 'Noturno', style: {marginBottom: 10}}}
          />
          <AppFormInput
            name="days"
            label="Dias"
            inputProps={{placeholder: 'Integral', style: {marginBottom: 10}}}
          />
        </FormProvider>
      </Container>
      <PaymentRow payment={{month: 'Novembro', paid: isLoggedUserDriver}} />
      <PaymentRow payment={{month: 'Outubro', paid: true}} />
      <PaymentRow payment={{month: 'Setembro', paid: true}} />
      <PaymentRow payment={{month: 'Agosto', paid: true}} />
      <PaymentRow payment={{month: 'Julho', paid: true}} />
    </ScrollView>
  );
};

export default PaymentsScreen;
