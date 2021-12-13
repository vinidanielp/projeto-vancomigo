import React from 'react';
import AppRoutes from '@app/config/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '@app/screens/auth';
import SignUpAddressScreen from '@app/screens/signUp/address';
import SignUpBasicInfoScreen from '@app/screens/signUp/basicInfo';
import SignUpCMTTRegisterScreen from '@app/screens/signUp/cmttRegister';
import SignUpDriverLicenseScreen from '@app/screens/signUp/driverLicense';
import SignUpProfilePictureScreen from '@app/screens/signUp/profilePicture';
import SignUpVehicleScreen from '@app/screens/signUp/vehicle';
import AppColors from '@app/config/colors';
import DrawerRoutes from './drawer';
import PaymentsScreen from '@app/screens/payments';
import RequestSpotScreen from '@app/screens/spot/new';
import SpotsListScreen from '@app/screens/spot/list';
import {FAKE_LOGGED_USER} from '@app/config/user';
import {UserType} from '@app/models/user';
import MyVehicleScreen from '@app/screens/myVehicle';

const Stack = createNativeStackNavigator();

const AppRouting = () => {
  const isLoggedUserDriver = FAKE_LOGGED_USER.type === UserType.DRIVER;

  const getHeaderStyle = (headerTitle: string) => ({
    headerTitle,
    headerStyle: {backgroundColor: AppColors.primary},
    contentStyle: {
      backgroundColor: AppColors.lightBg,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoutes.auth}>
        <Stack.Screen
          name={AppRoutes.auth}
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoutes.signUp.address}
          component={SignUpAddressScreen}
          options={getHeaderStyle('Endereço')}
        />
        <Stack.Screen
          name={AppRoutes.signUp.basicInfo}
          component={SignUpBasicInfoScreen}
          options={getHeaderStyle('Dados Pessoais')}
        />
        <Stack.Screen
          name={AppRoutes.signUp.cmttRegister}
          component={SignUpCMTTRegisterScreen}
          options={getHeaderStyle('Registro de CMTT')}
        />
        <Stack.Screen
          name={AppRoutes.signUp.driverLicense}
          component={SignUpDriverLicenseScreen}
          options={getHeaderStyle('Carteira de Habilitação')}
        />
        <Stack.Screen
          name={AppRoutes.signUp.profilePicture}
          component={SignUpProfilePictureScreen}
          options={getHeaderStyle('Foto de Perfil')}
        />
        <Stack.Screen
          name={AppRoutes.signUp.vehicle}
          component={SignUpVehicleScreen}
          options={getHeaderStyle('Registro de Veículo')}
        />
        <Stack.Screen
          name={AppRoutes.drawer.index}
          component={DrawerRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoutes.payments}
          component={PaymentsScreen}
          options={getHeaderStyle('Pagamentos')}
        />
        <Stack.Screen
          name={AppRoutes.spots.new}
          component={RequestSpotScreen}
          options={getHeaderStyle('Solicitar Vaga')}
        />
        <Stack.Screen
          name={AppRoutes.myVehicle}
          component={MyVehicleScreen}
          options={getHeaderStyle('Minha Van')}
        />
        <Stack.Screen
          name={AppRoutes.spots.list}
          component={SpotsListScreen}
          options={getHeaderStyle(
            isLoggedUserDriver ? 'Solicitações' : 'Minhas Solicitações',
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouting;
