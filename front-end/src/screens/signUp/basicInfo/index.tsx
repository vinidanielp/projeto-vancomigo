import AppPrimaryButton from '@app/components/base/buttons/primary';
import AppFormInput from '@app/components/form/input';
import FloatingContainerLayout from '@app/components/layout/floatingContainerLayout';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import {GoToBasicInfoParams} from '@app/hooks/navigation/useSignUpNavigation';
import {useRoute} from '@react-navigation/core';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Container} from './styles';

const SignUpBasicInfoScreen = () => {
  const formMethods = useForm();

  const route = useRoute();
  const routeParams = route.params as GoToBasicInfoParams;

  const {signUp} = useAppNavigation();

  return (
    <FormProvider {...formMethods}>
      <FloatingContainerLayout
        floatingChildren={
          <Container>
            <AppPrimaryButton onPress={() => signUp.goToAddress(routeParams)}>
              Prosseguir
            </AppPrimaryButton>
          </Container>
        }>
        <Container>
          <AppFormInput
            name="name"
            inputProps={{placeholder: 'Nome completo'}}
          />
          <AppFormInput
            name="birthDate"
            inputProps={{
              placeholder: 'data de nascimento',
              style: {marginTop: 20},
            }}
          />
          <AppFormInput
            name="phone"
            inputProps={{placeholder: 'Celular', style: {marginTop: 20}}}
          />
          <AppFormInput
            name="email"
            inputProps={{placeholder: 'E-mail', style: {marginTop: 20}}}
          />
          <AppFormInput
            name="email_confirmation"
            inputProps={{
              placeholder: 'Confirmar E-mail',
              style: {marginTop: 20},
            }}
          />
          <AppFormInput
            name="password"
            inputProps={{
              placeholder: 'Senha',
              secureTextEntry: true,
              style: {marginTop: 20},
            }}
          />
          <AppFormInput
            name="password_confirmation"
            inputProps={{
              placeholder: 'Confirmar Senha',
              secureTextEntry: true,
              style: {marginTop: 20, marginBottom: 80},
            }}
          />
        </Container>
      </FloatingContainerLayout>
    </FormProvider>
  );
};

export default SignUpBasicInfoScreen;
