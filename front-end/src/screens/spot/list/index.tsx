import RequestedSpotRow from '@app/components/domain/requestedSpot';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import RequestedSpotsFixture from '@app/fixtures/requested_spots';
import ReceivedSpotRow from '@app/components/domain/receivedSpot';
import {FAKE_LOGGED_USER} from '@app/config/user';
import {UserType} from '@app/models/user';
import {PortalHost} from '@gorhom/portal';
import AppPortals from '@app/config/portals';

const SpotsListScreen = () => {
  const isLoggedUserDriver = FAKE_LOGGED_USER.type === UserType.DRIVER;

  const ComponentToRender = isLoggedUserDriver
    ? ReceivedSpotRow
    : RequestedSpotRow;

  return (
    <>
      <FlatList
        collapsable
        data={RequestedSpotsFixture}
        renderItem={({item, index}) => (
          <ComponentToRender spot={item} key={index} />
        )}
      />
      <PortalHost name={AppPortals.spotListScreen} />
    </>
  );
};

export default SpotsListScreen;
