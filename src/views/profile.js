import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "../components/box";
import ProfileSection from "../components/profile/profile-section";
import Detail from "../components/tables/detail";

function ProfileView() {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#121212",
      }}
    >
      <SafeAreaView>
        <ProfileSection />
        <Detail />
      </SafeAreaView>
    </Box>
  );
}

export default ProfileView;
