import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import styled from "styled-components/native";
import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import AuthForm from "../molecules/AuthForm";
import LoginScreenImage from "../../../assets/images/LoginScreenImage";

import * as ROUTES from "../../constants/routes";

const Container = styled(Screen)``;

const SignupContainer = styled.View`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const ForgotPasswordContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 5px;
`;

const Image = styled(LoginScreenImage)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const UserName = styled.TextInput`
  background-color: lightgray;
  height: 40px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Password = styled.TextInput`
  background-color: lightgray;
  height: 40px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const SignInBtn = styled(Button)``;

const GetStartedBtn = styled(Button)`
  margin-bottom: 22px;
  margin-top: 5px;
`;

const SkipBtn = styled(Button)``;

const SignIn = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      {/* <SignInBtn title="Sign in with email" light /> */}
      <Image style={{ marginTop: 150 }} />
      <UserName
        placeholder="Username"
        onChange={(e) => setUsername(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e)}
        value={password}
      />
      <SignInBtn
        title="Sign In"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />
      <ForgotPasswordContainer style={{ marginBottom: 20 }}>
        <Text>Forgot Password</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </ForgotPasswordContainer>
      {/* <AuthForm title="salut" userName={userName} setUserName={setUsername} /> */}
      {/* <SkipBtn title="Skip" /> */}
      <SignupContainer style={{ flex: 1 }}>
        <Text>Doesnot have account?</Text>
        <Pressable>
          <SignUpButton>Sign Up</SignUpButton>
        </Pressable>
      </SignupContainer>
    </Container>
  );
};

export default SignIn;
