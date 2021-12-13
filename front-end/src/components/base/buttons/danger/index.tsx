import React from 'react';
import {TouchableOpacity} from 'react-native';
import ButtonContent, {BaseButtonProps} from '../base';
import {ButtonContainer} from './styles';

const AppDangerButton = ({onPress, children}: BaseButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <ButtonContent>{children}</ButtonContent>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default AppDangerButton;
