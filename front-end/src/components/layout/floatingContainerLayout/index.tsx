import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {FloatingContainer, MainContainer} from './styles';

interface FloatingContainerLayoutProps {
  children: React.ReactNode;
  floatingChildren: React.ReactNode;
  floatingStyle?: StyleProp<ViewStyle>;
}

const FloatingContainerLayout = ({
  children,
  floatingChildren,
  floatingStyle,
}: FloatingContainerLayoutProps) => {
  return (
    <>
      <MainContainer>{children}</MainContainer>
      <FloatingContainer style={floatingStyle}>
        {floatingChildren}
      </FloatingContainer>
    </>
  );
};

export default FloatingContainerLayout;
