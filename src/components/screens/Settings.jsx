import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Button from "../atoms/Button";
import * as ROUTES from "../../constants/routes";

const Btn = styled(Button)``;

function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings </Text>
      <Btn
        title="Go To Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </View>
  );
}

export default Settings;
