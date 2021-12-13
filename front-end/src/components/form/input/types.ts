import {TextInputProps} from 'react-native';

export type FormInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  inputProps?: Omit<TextInputProps, 'onBlur | onChangeText | value'>;
};
