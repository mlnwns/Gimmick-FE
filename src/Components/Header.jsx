import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-top: 25px;
`;

const Logo = styled.Image`
  width: 90px;
  height: 30px;
  object-fit: contain;
`;

const IconContainer = styled.View`
  flex-direction: row;
  margin-top: 3px;
`;

const IconButton = styled(TouchableOpacity)`
  margin-left: 14px;
`;

const StyledIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo source={require('../assets/images/header/logo.png')} />
      <IconContainer>
        <IconButton
          onPress={() => {
            //TODO: 즐겨찾기 버튼
          }}>
          <StyledIcon
            source={require('../assets/images/header/heart-icon.png')}
          />
        </IconButton>
        <IconButton
          onPress={() => {
            //TODO: 새로 만들기 버튼
          }}>
          <StyledIcon
            source={require('../assets/images/header/pencil-icon.png')}
          />
        </IconButton>
        <IconButton
          onPress={() => {
            //TODO: 설정 버튼
          }}>
          <StyledIcon
            source={require('../assets/images/header/settings-icon.png')}
          />
        </IconButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
