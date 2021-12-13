import AppRouting from '@app/routing';
import {PortalProvider} from '@gorhom/portal';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <PortalProvider>
      <GestureHandlerRootView />
      <AppRouting />
    </PortalProvider>
  );
};

export default App;
