import {StyleProp, TextStyle} from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 24px;
`;

export const ButtonContainer = styled.View`
  align-self: flex-end;
  flex-direction: row;
  margin-vertical: 20px;
`;

export const FlexBox = styled.View`
  flex: 1;
  margin-horizontal: 5px;
`;

export const textAreaStyle: StyleProp<TextStyle> = {
  marginVertical: 10,
  flex: 1,
  alignSelf: 'stretch',
};
