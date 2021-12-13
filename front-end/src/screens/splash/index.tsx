import AppAssets from '@app/config/assets';
import React from 'react';
import {Image} from 'react-native';
import {Container} from './styles';

const SplashScreen = () => {
  return (
    <Container>
      <Image source={AppAssets.logo} />
    </Container>
  );
};

export default SplashScreen;
