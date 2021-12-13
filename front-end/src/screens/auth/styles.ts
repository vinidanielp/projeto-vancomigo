import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  height: 220px;
  background-color: ${AppColors.yellow};
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: 45px;
  padding-horizontal: 20px;
  background-color: ${AppColors.lightBg};
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  color: ${AppColors.grey};
`;

export const ButtonContainer = styled.View`
  padding-horizontal: 70px;
`;
