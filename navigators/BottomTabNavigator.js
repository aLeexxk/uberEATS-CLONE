import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/components/screens/Home";
import Orders from "../src/components/screens/Shop";
import Shop from "../src/components/screens/Shop";
import Settings from "../src/components/screens/Settings";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

import * as ROUTES from "../src/constants/routes";
import SettingsNavigator from "./SettingsNavigator";

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home-outline" : "home";
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card-outline" : "card";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food-outline" : "fast-food";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings-outline" : "settings";
          }

          return <Icon name={icon} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home", headerShown: true }}
      />
      <Tab.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Order" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
