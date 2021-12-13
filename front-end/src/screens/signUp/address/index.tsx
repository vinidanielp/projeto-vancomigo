import AppPrimaryButton from '@app/components/base/buttons/primary';
import AppFormInput from '@app/components/form/input';
import FloatingContainerLayout from '@app/components/layout/floatingContainerLayout';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import {GoToAddressParams} from '@app/hooks/navigation/useSignUpNavigation';
import {useRoute} from '@react-navigation/core';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Floating,
  CepAndUfContainer,
  CepContainer,
  Container,
  UfContainer,
} from './styles';

const SignUpAddressScreen = () => {
  const formMethods = useForm();

  const route = useRoute();
  const routeParams = route.params as GoToAddressParams;

  const {signUp} = useAppNavigation();

  return (
    <FormProvider {...formMethods}>
      <FloatingContainerLayout
        floatingChildren={
          <Floating>
            <AppPrimaryButton
              onPress={() => signUp.goToProfilePicture(routeParams)}>
              Prosseguir
            </AppPrimaryButton>
          </Floating>
        }>
        <Container>
          <CepAndUfContainer>
            <CepContainer>
              <AppFormInput name="cep" inputProps={{placeholder: 'CEP'}} />
            </CepContainer>
            <UfContainer>
              <AppFormInput name="uf" inputProps={{placeholder: 'UF'}} />
            </UfContainer>
          </CepAndUfContainer>
          <AppFormInput
            name="street"
            inputProps={{
              placeholder: 'Rua / Logradouro',
              style: {marginTop: 20},
            }}
          />
          <AppFormInput
            name="additional_info"
            inputProps={{placeholder: 'Complemento', style: {marginTop: 20}}}
          />
          <AppFormInput
            name="neighborhood"
            inputProps={{placeholder: 'Bairro', style: {marginTop: 20}}}
          />
          <AppFormInput
            name="city"
            inputProps={{
              placeholder: 'Municipio',
              style: {marginTop: 20, marginBottom: 80},
            }}
          />
        </Container>
      </FloatingContainerLayout>
    </FormProvider>
  );
};

export default SignUpAddressScreen;
