import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "../components/box";

function ProfileView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SafeAreaView>
          <Text>Profil</Text>
        </SafeAreaView>
      </Box>
  );
}

export default ProfileView;
