import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${AppColors.black};
  padding-horizontal: 5px;
  padding-vertical: 10px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: ${AppColors.black};
`;
