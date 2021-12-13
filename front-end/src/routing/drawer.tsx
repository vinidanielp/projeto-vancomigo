import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppRoutes from '../config/routes';
import MapScreen from '../screens/map';
import AppDrawer from '../components/base/drawer';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName={AppRoutes.drawer.map}
      drawerContent={AppDrawer}>
      <Drawer.Screen
        name={AppRoutes.drawer.map}
        component={MapScreen}
        options={{
          headerShown: false,
          drawerLabel: 'Mapa',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
