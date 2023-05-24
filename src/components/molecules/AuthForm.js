import React from "react";
import styled from "styled-components/native";
import Button from "../atoms/Button";

const Container = styled.View``;

const UserName = styled.TextInput`
  background-color: lightgray;
  height: 54px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Password = styled.TextInput`
  background-color: lightgray;
  height: 54px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const ActionBtn = styled(Button)``;

const AuthForm = ({ title, userName, password, setUsername, setPassword }) => {
  return (
    <Container>
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
      <ActionBtn title={title} />
    </Container>
  );
};

export default AuthForm;
