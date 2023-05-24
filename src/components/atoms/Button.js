import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 258px;
  height: 45px;
  /* background-color: #54924f; */
  background-color: ${({ light }) => (light ? "#C7DA5C" : "#54924f")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "#FFFFFFFF")};
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false }) => {
  return (
    <Container onPress={onPress} light={light}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
