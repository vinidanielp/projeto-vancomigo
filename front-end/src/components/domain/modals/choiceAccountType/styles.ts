import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 24px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 20px;
`;

export const CancelText = styled.Text`
  color: ${AppColors.red};
  font-size: 18px;
`;

export const FlexBox = styled.View`
  flex: 1;
  margin-horizontal: 5px;
`;
