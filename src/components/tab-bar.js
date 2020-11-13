import React from "react";
import { View } from "react-native";
import Button from "./button"
import SvgHome from "./icons/Home";
import SvgReadingList from "./icons/ReadingList";
import SvgCreate from "./icons/Create";
import SvgProfile from "./icons/Profile";
import SvgNotification from "./icons/Notification";

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === "Home" ? (
          <Button onPress={onPress} flex={1}>
            <SvgHome />
          </Button>
        ) : (
          <Button height ={50} onPress={onPress} flex= {1}>
            {label === 'Reading List' && < SvgReadingList/>}
            {label === 'Create' && < SvgCreate/>}
            {label === 'Notification' && < SvgNotification/>}
            {label === 'Profile' && < SvgProfile/>}
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
