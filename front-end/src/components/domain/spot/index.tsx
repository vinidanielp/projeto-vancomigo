import AppAssets from '@app/config/assets';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {Container, Text} from './styles';
import {SpotRowProps} from './types';

const SpotRow = ({onPress, spot}: SpotRowProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text>{spot.name}</Text>
        <SvgXml width="25" height="17" xml={AppAssets.vehicle} />
      </Container>
    </TouchableOpacity>
  );
};

export default SpotRow;
