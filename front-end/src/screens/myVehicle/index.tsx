import AppFormInput from '@app/components/form/input';
import AppAssets from '@app/config/assets';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import {Container, ImagePreview, MapContainer} from './styles';

const MyVehicleScreen = () => {
  const formMethods = useForm();

  return (
    <ScrollView>
      <Container>
        <ImagePreview
          source={AppAssets.defaultProfilePicture}
          resizeMode="cover"
        />
        <FormProvider {...formMethods}>
          <AppFormInput
            name="count"
            label="Vagas"
            inputProps={{
              style: {marginBottom: 10},
            }}
          />
          <AppFormInput
            name="description"
            label="Descrição"
            inputProps={{style: {marginBottom: 10}}}
          />
          <AppFormInput
            name="period"
            label="Turnos"
            inputProps={{style: {marginBottom: 10}}}
          />
          <AppFormInput
            name="neighborhood"
            label="Bairros"
            inputProps={{style: {marginBottom: 10}}}
          />
        </FormProvider>
      </Container>
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
    </ScrollView>
  );
};

export default MyVehicleScreen;
