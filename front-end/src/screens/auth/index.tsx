import AppPrimaryButton from '@app/components/base/buttons/primary';
import AppFormInput from '@app/components/form/input';
import AppAssets from '@app/config/assets';
import React, {useCallback, useRef} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Image, StatusBar} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  ForgotPasswordContainer,
  ForgotPasswordText,
  FormContainer,
  Header,
  ButtonContainer,
} from './styles';
import ChoiceAccountTypeModal from '@app/components/domain/modals/choiceAccountType';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import FloatingContainerLayout from '@app/components/layout/floatingContainerLayout';

const AuthScreen = () => {
  const formMethods = useForm();
  const {goToMap} = useAppNavigation();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <FormProvider {...formMethods}>
      <StatusBar translucent hidden />
      <FloatingContainerLayout
        floatingChildren={
          <ButtonContainer style={{marginVertical: 20}}>
            <AppPrimaryButton onPress={handlePresentModalPress}>
              Criar conta
            </AppPrimaryButton>
          </ButtonContainer>
        }>
        <Header>
          <Image source={AppAssets.logo} />
        </Header>
        <FormContainer>
          <AppFormInput name="email" inputProps={{placeholder: 'E-mail'}} />
          <AppFormInput
            name="password"
            inputProps={{
              placeholder: 'Senha',
              secureTextEntry: true,
              style: {marginTop: 20},
            }}
          />
          <ButtonContainer style={{marginVertical: 20}}>
            <AppPrimaryButton onPress={goToMap}>Sign in</AppPrimaryButton>
          </ButtonContainer>
          <ForgotPasswordContainer>
            <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
          </ForgotPasswordContainer>
        </FormContainer>
      </FloatingContainerLayout>
      <ChoiceAccountTypeModal modalRef={bottomSheetModalRef} />
    </FormProvider>
  );
};

export default AuthScreen;
