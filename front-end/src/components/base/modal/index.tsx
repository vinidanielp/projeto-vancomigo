import React, {useCallback} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {AppModalProps} from './types';

const AppModal = ({
  modalRef,
  snapPoints = ['10%'],
  children,
}: AppModalProps) => {
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={modalRef}
        backdropComponent={renderBackdrop}>
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default AppModal;
