import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {LabelText, StyledTextInput} from './styles';
import {FormInputProps} from './types';

const AppFormInput = (props: FormInputProps) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          {props.label && <LabelText>{props.label}</LabelText>}
          <StyledTextInput
            {...(props.inputProps || {})}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        </>
      )}
      name={props.name}
      defaultValue={props.defaultValue || ''}
    />
  );
};

export default AppFormInput;
