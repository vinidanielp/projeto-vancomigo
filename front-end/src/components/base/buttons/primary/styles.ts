import AppColors from '@app/config/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    backgroundColor: AppColors.buttonColor,
    borderRadius: 8,
    paddingVertical: 10,
    color: AppColors.black,
    fontWeight: 400,
  },
});

export default styles;
