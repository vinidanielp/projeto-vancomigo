import AppPrimaryButton from '@app/components/base/buttons/primary';
import FloatingContainerLayout from '@app/components/layout/floatingContainerLayout';
import AppAssets from '@app/config/assets';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import {GoToProfilePicture} from '@app/hooks/navigation/useSignUpNavigation';
import {UserType} from '@app/models/user';
import {useRoute} from '@react-navigation/core';
import React from 'react';
import {
  Container,
  TextStep,
  TextStepActive,
  StepsContainer,
  ImagePreview,
  ButtonContainer,
} from './styles';

const SignUpProfilePictureScreen = () => {
  const route = useRoute();
  const routeParams = route.params as GoToProfilePicture;

  const {signUp, goToMap} = useAppNavigation();

  const onNextBtnClicked = () => {
    const {userType} = routeParams;

    if (userType === UserType.DRIVER) {
      signUp.goToVehicle();
      return;
    }

    goToMap();
  };

  return (
    <FloatingContainerLayout
      floatingChildren={
        <ButtonContainer>
          <AppPrimaryButton onPress={onNextBtnClicked}>
            Prosseguir
          </AppPrimaryButton>
        </ButtonContainer>
      }>
      <Container>
        <ImagePreview
          source={AppAssets.defaultProfilePicture}
          resizeMode="cover"
        />
        <StepsContainer>
          <TextStepActive>Requisitos para a foto</TextStepActive>
          <TextStep>Mostre o rosto todo</TextStep>
          <TextStep>Tire a foto em um local bem iluminado</TextStep>
          <TextStep>Não utilize óculos escuro e nem chapéu</TextStep>
        </StepsContainer>
      </Container>
    </FloatingContainerLayout>
  );
};

export default SignUpProfilePictureScreen;
