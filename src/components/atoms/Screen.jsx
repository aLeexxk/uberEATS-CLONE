import React from "react";
import { View, Text, Platform, Dimensions } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView`
  display: flex;
  height: 100%;
`;

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight};
  width: ${windowWidth};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Screen = ({ children, ...otherProps }) => {
  return (
    <MainWrapper
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...otherProps}
    >
      <ImageBackground>
        <Container>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
