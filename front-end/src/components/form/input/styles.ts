import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  height: 36px;
  border: 1px solid ${AppColors.grey};
  border-radius: 8px;
  background-color: ${AppColors.white};
  padding-horizontal: 12px;
  padding-vertical: 8px;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  color: ${AppColors.grey};
`;
