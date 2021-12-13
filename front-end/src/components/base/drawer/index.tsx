import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import {
  HeaderContainer,
  ImagePreview,
  LegalContainer,
  DrawerContainer,
} from './styles';
import AppAssets from '@app/config/assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppRoutes from '@app/config/routes';
import {FAKE_LOGGED_USER} from '@app/config/user';
import {UserType} from '@app/models/user';
import AppColors from '@app/config/colors';

const AppDrawer = (props: DrawerContentComponentProps) => {
  const isLoggedUserDriver = FAKE_LOGGED_USER.type === UserType.DRIVER;

  return (
    <DrawerContainer>
      <HeaderContainer>
        <ImagePreview
          source={AppAssets.defaultProfilePicture}
          resizeMode="cover"
        />
        <Text>{FAKE_LOGGED_USER.name}</Text>
      </HeaderContainer>
      <DrawerContentScrollView
        {...props}
        style={{borderBottomColor: AppColors.black}}>
        <DrawerItem label="Meus Dados" onPress={() => {}} />
        <DrawerItem
          label="Minha Van"
          onPress={() => props.navigation.navigate(AppRoutes.myVehicle)}
        />
        <DrawerItem
          label={
            isLoggedUserDriver
              ? 'Solicitações de vagas'
              : 'Minhas Solicitações de vagas'
          }
          onPress={() => props.navigation.navigate(AppRoutes.spots.list)}
        />
        <DrawerItem
          label="Pagamentos"
          onPress={() => props.navigation.navigate(AppRoutes.payments)}
        />
      </DrawerContentScrollView>
      <LegalContainer>
        <TouchableOpacity>
          <Text>Informações Legais</Text>
        </TouchableOpacity>
      </LegalContainer>
    </DrawerContainer>
  );
};

export default AppDrawer;
