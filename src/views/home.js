import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "../components/box";
import SvgHome from "../components/icons/Home";

function HomeView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <Text>Ana sayfa</Text>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
