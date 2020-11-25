import React from "react";
import { SafeAreaView } from "react-native";
import Box from "../components/box";
import ContentImage from "../components/content/content-image";
import DailyDone from "../components/content/daily-done";
import Heading from "../components/text/article/heading";
import ContentGeneral from "../components/content/content-general";
import DailyRead from "../components/content/daily-read";
import DividerArchive from "../components/content/divider-archive";
import ProfileSection from "../components/profile/profile-section";

function HomeView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <ContentImage />
        <DailyDone />
        <Heading>
          Bu bir denemedir, lorem ipsum dolor set amet falan filan
        </Heading>
        <DailyRead/>
        <DividerArchive/>
        <ProfileSection/>
        <ContentGeneral/>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
