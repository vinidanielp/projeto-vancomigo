import AppPrimaryButton from '@app/components/base/buttons/primary';
import FloatingContainerLayout from '@app/components/layout/floatingContainerLayout';
import AppAssets from '@app/config/assets';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import React from 'react';
import {
  Container,
  Title,
  TextStep,
  TextStepActive,
  StepsContainer,
  ImagePreview,
  ButtonContainer,
} from './styles';

const SignUpDriverLicenseScreen = () => {
  const {signUp} = useAppNavigation();

  return (
    <FloatingContainerLayout
      floatingChildren={
        <ButtonContainer>
          <AppPrimaryButton onPress={signUp.goToCMTTRegister}>
            Prosseguir
          </AppPrimaryButton>
        </ButtonContainer>
      }>
      <Container>
        <Title>Foto da sua carteira de habilitação</Title>
        <ImagePreview source={AppAssets.driverLicenseExample} />
        <StepsContainer>
          <TextStepActive>Requisitos para a foto</TextStepActive>
          <TextStep>Documento inteiro</TextStep>
          <TextStep>Tire uma foto com as duas mãos</TextStep>
          <TextStep>Boa iluminação e fundo branco</TextStep>
        </StepsContainer>
      </Container>
    </FloatingContainerLayout>
  );
};

export default SignUpDriverLicenseScreen;
