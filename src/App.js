import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeView from "./views/home";
import ReadingListView from "./views/readingList";
import CreateView from "./views/create";
import NotificationView from "./views/notification";
import ProfileView from "./views/profile";
import TabBar from "./components/tab-bar";
import { SafeAreaView } from "react-native";
import Box from "./components/box";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Box flex={1} as={SafeAreaView} style={{backgroundColor: '#262626'}}>
      <NavigationContainer >
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Reading List" component={ReadingListView} />
          <Tab.Screen name="Create" component={CreateView} />
          <Tab.Screen name="Notification" component={NotificationView} />
          <Tab.Screen name="Profile" component={ProfileView} />
        </Tab.Navigator>
      </NavigationContainer>
      </Box>
  );
}
