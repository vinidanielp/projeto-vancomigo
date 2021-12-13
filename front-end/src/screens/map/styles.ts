import AppColors from '@app/config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  height: 130px;
  padding: 24px;
  background-color: ${AppColors.yellow};
`;

export const SearchContainer = styled.View`
  flex: 1;
  margin-left: 14px;
`;

export const MapContainer = styled.View`
  flex: 1;
  background-color: ${AppColors.grey};
`;

export const RequestList = styled.View`
  height: 200px;
  padding: 24px;
`;
