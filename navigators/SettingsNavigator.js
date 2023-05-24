import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingDetails from "../src/components/screens/SettingDetails";
import Settings from "../src/components/screens/Settings";

import * as ROUTES from "../src/constants/routes";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingDetails}
        options={{ title: "Setting Details" }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
