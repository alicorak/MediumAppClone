import React from "react";
import { SafeAreaView, Text } from "react-native";
import Box from "../components/box";
import ProfileSection from "../components/profile/profile-section";
import ProfileEdit from "../components/profile/profile-edit";

function ProfileView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <Text>Profil</Text>
        
        <ProfileEdit/>
      </SafeAreaView>
    </Box>
  );
}

export default ProfileView;
