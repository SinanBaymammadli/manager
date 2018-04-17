import { TabNavigator } from "react-navigation";

import Calendar from "./screens/Calendar";
import Home from "./screens/Home";
import Inbox from "./screens/Inbox";
import People from "./screens/People";
import Profile from "./screens/Profile";

const RootNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Calendar: { screen: Calendar },
    Inbox: { screen: Inbox },
    People: { screen: People },
    Profile: { screen: Profile }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default RootNavigator;
