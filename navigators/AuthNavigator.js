import LoginScreen from "../src/components/screens/SignIn";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../src/components/atoms/Button";
import * as ROUTES from "../src/constants/routes";

import SignIn from "../src/components/screens/SignIn";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import SettingDetails from "../src/components/screens/SettingDetails";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Shop Screen</Text>
      <Button title="Go Back" light onPress={() => navigation.goBack()} />
      <Button
        title="FINISH SHOP"
        light
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.SIGN_IN_SCREEN}
          component={SignIn}
          options={{ title: "Sign in", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD_SCREEN}
          component={ForgotPassword}
          options={{ title: "Forgot Password", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.SIGN_UP_SCREEN}
          component={SignUp}
          options={{ title: "Sign  Up", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.DRAWER_NAVIGATOR}
          component={DrawerNavigator}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SETTINGS_DETAILS}
          component={SettingDetails}
          options={{ title: "Settings Details", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
