import React from 'react';
import AppColors from '@app/config/colors';
import styled from 'styled-components/native';
import {TouchableOpacityProps, View} from 'react-native';

const BaseText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${AppColors.black};
`;

type ButtonContentProps = {
  children: React.ReactNode | string;
};

export type BaseButtonProps = {
  children: React.ReactNode | string;
  onPress?: TouchableOpacityProps['onPress'];
};

const ButtonContent = ({children}: ButtonContentProps) => {
  if (typeof children === 'string') {
    return <BaseText>{children}</BaseText>;
  }

  return <View>{children}</View>;
};

export default ButtonContent;
