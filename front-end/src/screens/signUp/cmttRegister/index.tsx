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

const SignUpCMTTRegisterScreen = () => {
  const {goToMap} = useAppNavigation();

  return (
    <FloatingContainerLayout
      floatingChildren={
        <ButtonContainer>
          <AppPrimaryButton onPress={goToMap}>Prosseguir</AppPrimaryButton>
        </ButtonContainer>
      }>
      <Container>
        <Title>Foto do registro da CMTT</Title>
        <ImagePreview
          source={AppAssets.defaultProfilePicture}
          resizeMode="cover"
        />
        <StepsContainer>
          <TextStepActive>Requisitos para a foto</TextStepActive>
          <TextStep>Documento Inteiro</TextStep>
          <TextStep>Tire uma foto com as duas mãos</TextStep>
          <TextStep>Boa iluminação e fundo branco</TextStep>
        </StepsContainer>
      </Container>
    </FloatingContainerLayout>
  );
};

export default SignUpCMTTRegisterScreen;
