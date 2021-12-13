import AppPrimaryButton from '@app/components/base/buttons/primary';
import AppModal from '@app/components/base/modal';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';
import {UserType} from '@app/models/user';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  ButtonContainer,
  CancelText,
  MainContainer,
  TitleText,
  FlexBox,
} from './styles';
import {ChoiceAccountTypeModalProps} from './types';

const ChoiceAccountTypeModal = ({modalRef}: ChoiceAccountTypeModalProps) => {
  const {signUp} = useAppNavigation();

  const dismiss = useCallback(() => {
    modalRef?.current?.dismiss();
  }, [modalRef]);

  return (
    <AppModal snapPoints={[250]} modalRef={modalRef}>
      <MainContainer>
        <TitleText>O que você é</TitleText>
        <ButtonContainer>
          <FlexBox>
            <AppPrimaryButton
              onPress={() => {
                modalRef?.current?.dismiss();
                signUp.goToBasicInfo({userType: UserType.PASSENGER});
              }}>
              Passageiro
            </AppPrimaryButton>
          </FlexBox>
          <FlexBox>
            <AppPrimaryButton
              onPress={() => {
                modalRef?.current?.dismiss();
                signUp.goToBasicInfo({userType: UserType.DRIVER});
              }}>
              Motorista
            </AppPrimaryButton>
          </FlexBox>
        </ButtonContainer>
        <TouchableOpacity onPress={dismiss}>
          <CancelText>Cancel</CancelText>
        </TouchableOpacity>
      </MainContainer>
    </AppModal>
  );
};

export default ChoiceAccountTypeModal;
