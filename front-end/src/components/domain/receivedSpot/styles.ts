import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid ${AppColors.grey};
  padding-horizontal: 5px;
  padding-vertical: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${AppColors.black};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ActionIcon = styled.TouchableOpacity`
  margin-left: 10px;
`;
