import React from "react";
import {SafeAreaView, Text } from "react-native";
import Box from "../components/box";
import ButtonOutline from "../components/buttons/button-outline";


function HomeView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <Text>Ana sayfa</Text>
        <ButtonOutline bg='#41872C'>
          <Text style={{fontSize:'17', color: 'white'}}>Following</Text>
        </ButtonOutline>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
