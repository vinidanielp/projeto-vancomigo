import React from 'react';
import {Pressable, View} from 'react-native';
import ButtonContent, {BaseButtonProps} from '../base';
import styles from './styles';

const AppPrimaryButton = ({onPress, children}: BaseButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.base}>
      {({pressed}) => (
        <>
          {pressed && (
            <View
              style={{
                position: 'absolute',
                top: 10,
                height: 5,
                width: '100%',
                marginTop: -10,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                alignSelf: 'center',
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowOffset: {
                  width: 10,
                  height: 5,
                },
                shadowRadius: 3,
                shadowOpacity: 1,
                borderTopStartRadius: 8,
                borderTopEndRadius: 8,
              }}
            />
          )}
          <ButtonContent>{children}</ButtonContent>
        </>
      )}
    </Pressable>
  );
};

export default AppPrimaryButton;
