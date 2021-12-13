import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  border: 1px solid ${AppColors.grey};
  padding-horizontal: 5px;
  padding-vertical: 10px;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${AppColors.black};
`;

export const DetailsButton = styled.TouchableOpacity`
  background-color: ${AppColors.primary}
  padding-vertical: 5px;
  padding-horizontal: 12px;
  border-radius: 8px;
`;

export const ExpandedContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const DeniedContainer = styled(ExpandedContainer)`
  flex-direction: column;
  align-items: stretch;
`;

export const DeniedTextBox = styled.Text`
  color: ${AppColors.grey}
  padding: 12px;
  border: 1px solid ${AppColors.grey}
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${AppColors.white}
  min-height: 80px;
`;
