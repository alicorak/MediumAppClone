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
    <View style={{ flexDirection: "row" , backgroundColor: '#262626'}}>
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
          <Button onPress={onPress} flex={1} key={label} >
            <SvgHome stroke = {isFocused ? 'white' : '#818181' } />
          </Button>
        ) : (
          <Button height ={50} onPress={onPress} flex= {1} key={label} >
            {label === 'Reading List' && < SvgReadingList  stroke = {isFocused ? 'white' : '#818181' }/>}
            {label === 'Create' && < SvgCreate  stroke = {isFocused ? 'white' : '#818181' }/>}
            {label === 'Notification' && < SvgNotification  stroke = {isFocused ? 'white' : '#818181' }/>}
            {label === 'Profile' && < SvgProfile  stroke = {isFocused ? 'white' : '#818181' }/>}
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
