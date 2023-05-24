import Home from "../src/components/screens/Home";
import Orders from "../src/components/screens/Shop";
import Shop from "../src/components/screens/Shop";
import BottomTabNavigator from "./BottomTabNavigator";
import Settings from "../src/components/screens/Settings";
import * as ROUTES from "../src/constants/routes";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Order" }}
      />
      <Drawer.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
