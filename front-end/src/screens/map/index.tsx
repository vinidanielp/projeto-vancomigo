import SpotRow from '@app/components/domain/spot';
import AppFormInput from '@app/components/form/input';
import AppAssets from '@app/config/assets';
import React from 'react';
import MapView from 'react-native-maps';
import {SvgXml} from 'react-native-svg';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Container,
  HeaderContainer,
  MapContainer,
  RequestList,
  SearchContainer,
} from './styles';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useAppNavigation from '@app/hooks/navigation/useAppNavigation';

const MapScreen = ({navigation}) => {
  const formMethods = useForm();
  const {goToRequestSpot} = useAppNavigation();

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity
          onPress={navigation.toggleDrawer}
          style={{paddingHorizontal: 10}}>
          <SvgXml width="7" height="24" xml={AppAssets.verticalDots} />
        </TouchableOpacity>
        <SearchContainer>
          <FormProvider {...formMethods}>
            <AppFormInput
              name="from"
              inputProps={{placeholder: 'Origem', style: {marginBottom: 12}}}
            />
            <AppFormInput name="to" inputProps={{placeholder: 'Destino'}} />
          </FormProvider>
        </SearchContainer>
      </HeaderContainer>
      <MapContainer>
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: -16.2942869,
            longitude: -48.9433438,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
        />
      </MapContainer>
      <RequestList>
        <SpotRow spot={{name: 'Dora'}} onPress={goToRequestSpot} />
        <SpotRow spot={{name: 'Carlos'}} onPress={goToRequestSpot} />
        <SpotRow spot={{name: 'José'}} onPress={goToRequestSpot} />
      </RequestList>
    </Container>
  );
};

export default MapScreen;
