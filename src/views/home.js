import React from "react";
import { SafeAreaView } from "react-native";
import Box from "../components/box";
import DailyDone from "../components/content/daily-done";
import DailyList from "../components/content/daily-list";
import Heading from "../components/text/article/heading";
import ContentGeneral from "../components/content/content-general";
import DailyRead from "../components/content/daily-read";
import DividerArchive from "../components/content/divider-archive";
import DividerTopic from "../components/content/divider-topic";

import ProfileSection from "../components/profile/profile-section";
import { ScrollView } from "react-native-gesture-handler";

function HomeView() {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#121212",
      }}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DailyRead />
          <DailyList />
          <DailyList />
          <DailyList />
          <DailyDone />
          <DividerTopic />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
          <ContentGeneral />
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
