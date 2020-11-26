import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../components/box";
import ButtonFull from "../components/buttons/button-full";
import ButtonOutline from "../components/buttons/button-outline";
import ButtonIcon from "../components/buttons/button-icon";
import Heading from "../components/text/article/heading";
import Subheading from "../components/text/article/subheading";

function CreateView() {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#121212"
      }}
    >
      <ScrollView>
        <Heading>Description</Heading>
        <Subheading my={18} mx={18}>
          This project just made for jump start to React Native UI development.
        </Subheading>
      </ScrollView>
    </Box>
  );
}
export default CreateView;
