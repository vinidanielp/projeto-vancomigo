import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${AppColors.black};
`;

export const ImagePreview = styled.Image`
  margin-top: 24px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  overflow: hidden;
`;

export const StepsContainer = styled.View`
  align-self: stretch;
  margin-vertical: 40px;
`;

export const TextStep = styled.Text`
  font-size: 14px;
  color: ${AppColors.grey};
`;

export const TextStepActive = styled(TextStep)`
  color: ${AppColors.black};
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  padding: 20px;
`;
