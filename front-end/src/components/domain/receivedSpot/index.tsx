import React, {useCallback, useRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ActionIcon, ActionsContainer, Container, Text} from './styles';
import {ReceivedSpotRowProps} from './types';
import {SvgXml} from 'react-native-svg';
import AppAssets from '@app/config/assets';
import DenySpotRequestModal from '../modals/denySpotRequest';
import {Portal} from '@gorhom/portal';
import AppPortals from '@app/config/portals';

const ReceivedSpotRow = ({spot}: ReceivedSpotRowProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const showModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <Container>
        <Text>{spot.passenger?.name}</Text>
        <ActionsContainer>
          <ActionIcon>
            <SvgXml width="25" height="19" xml={AppAssets.check} />
          </ActionIcon>
          <ActionIcon onPress={showModal}>
            <SvgXml width="25" height="22" xml={AppAssets.close} />
          </ActionIcon>
          <ActionIcon>
            <SvgXml width="25" height="25" xml={AppAssets.search} />
          </ActionIcon>
        </ActionsContainer>
      </Container>
      <Portal hostName={AppPortals.spotListScreen}>
        <DenySpotRequestModal modalRef={bottomSheetModalRef} />
      </Portal>
    </>
  );
};

export default ReceivedSpotRow;
