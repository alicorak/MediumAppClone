import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "../components/box";
import ButtonOutline from "../components/buttons/button-outline";
import SvgCheck from "../components/icons/Check";
import theme from "../utils/theme";

function HomeView() {
  return (
    
      <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SafeAreaView>
          <Text>Ana sayfa</Text>
          <ButtonOutline bg={theme.colors.green}>
            <Text style={{ fontSize: "17", color: "white" }}>
              Done for Today
            </Text>
            <SvgCheck></SvgCheck>
          </ButtonOutline>
        </SafeAreaView>
      </Box>
  );
}

export default HomeView;
