import AppColors from '@app/config/colors';
import useTogglable from '@app/hooks/useTogglable';
import {SpotStatus} from '@app/models/spot';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  MainContainer,
  Container,
  Text,
  DetailsButton,
  ExpandedContainer,
  DeniedContainer,
  DeniedTextBox,
} from './styles';
import {RequestedSpotRowProps} from './types';

const TEXT_COLOR_BY_STATUS = {
  [SpotStatus.APPROVED]: AppColors.green,
  [SpotStatus.DENIED]: AppColors.red,
  [SpotStatus.AWAITING]: AppColors.primary,
};

const RequestedSpotRow = ({spot}: RequestedSpotRowProps) => {
  const {status: isExpanded, toggle: toggleExpandedState} = useTogglable(false);

  const getDetails = () => {
    if (spot.status === SpotStatus.APPROVED) {
      return (
        <ExpandedContainer>
          <Text>Aprovado 12/05/2021 as 18:00</Text>
          <DetailsButton>
            <Text>Detalhes</Text>
          </DetailsButton>
        </ExpandedContainer>
      );
    }

    if (spot.status === SpotStatus.DENIED) {
      return (
        <DeniedContainer>
          <Text style={{color: AppColors.grey}}>Motivo da Recusa</Text>
          <DeniedTextBox>Van fora da rota.</DeniedTextBox>
        </DeniedContainer>
      );
    }
  };

  return (
    <MainContainer>
      <TouchableOpacity onPress={toggleExpandedState}>
        <Container>
          <Text>{spot.driver?.name}</Text>
          <Text style={{color: TEXT_COLOR_BY_STATUS[spot.status!]}}>
            {spot.status}
          </Text>
        </Container>
      </TouchableOpacity>
      {isExpanded && getDetails()}
    </MainContainer>
  );
};

export default RequestedSpotRow;
