import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  min-height: 60px;
  align-items: center;
  border: 1px solid ${AppColors.grey};
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;

export const Text = styled.Text`
  color: ${AppColors.black};
`;

export const PaidContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaidText = styled.Text`
  color: ${AppColors.grey};
  margin-right: 5px;
`;

export const PayButton = styled.TouchableOpacity`
  background-color: ${AppColors.green}
  padding-vertical: 5px;
  padding-horizontal: 12px;
  border-radius: 8px;
`;
