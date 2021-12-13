import styled from 'styled-components/native';
import AppColors from '@app/config/colors';

export const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${AppColors.light};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 40px;
  padding-horizontal: 14px;
  background-color: ${AppColors.primary};
`;

export const ImagePreview = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  overflow: hidden;
  margin-right: 10px;
`;

export const LegalContainer = styled.View`
  padding-horizontal: 25px;
  padding-vertical: 20px;
  border-top: 1px solid ${AppColors.black};
`;
