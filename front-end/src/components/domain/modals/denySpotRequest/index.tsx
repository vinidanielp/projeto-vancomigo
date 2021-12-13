import AppDangerButton from '@app/components/base/buttons/danger';
import AppSuccessButton from '@app/components/base/buttons/success';
import AppModal from '@app/components/base/modal';
import AppFormInput from '@app/components/form/input';
import React, {useCallback} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {
  ButtonContainer,
  MainContainer,
  textAreaStyle,
  TitleText,
} from './styles';
import {DenySpotRequestModalProps} from './types';

const DenySpotRequestModal = ({modalRef}: DenySpotRequestModalProps) => {
  const formMethods = useForm();

  const dismiss = useCallback(() => {
    modalRef?.current?.dismiss();
  }, [modalRef]);

  return (
    <AppModal snapPoints={[300]} modalRef={modalRef}>
      <MainContainer>
        <TitleText>Motivo da Recusa</TitleText>
        <FormProvider {...formMethods}>
          <AppFormInput
            name="reason"
            inputProps={{
              multiline: true,
              numberOfLines: 4,
              style: textAreaStyle,
            }}
          />
        </FormProvider>
        <ButtonContainer>
          <AppDangerButton onPress={dismiss}>Cancelar</AppDangerButton>
          <View style={{marginRight: 10}} />
          <AppSuccessButton onPress={dismiss}>Finalizar</AppSuccessButton>
        </ButtonContainer>
      </MainContainer>
    </AppModal>
  );
};

export default DenySpotRequestModal;
