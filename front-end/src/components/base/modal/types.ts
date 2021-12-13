import {BottomSheetMethods} from '@app/components/domain/modals/types';
import {BottomSheetProps} from '@gorhom/bottom-sheet';

export type AppModalProps = {
  modalRef?: React.RefObject<BottomSheetMethods>;
  snapPoints?: BottomSheetProps['snapPoints'];
  children: React.ReactNode;
};
