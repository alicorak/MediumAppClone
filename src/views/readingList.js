import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../components/box";
import DailyList from "../components/content/daily-list";
import DividerArchive from "../components/content/divider-archive";

function ReadingListView() {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#121212",
      }}
    >
      <ScrollView>
        <DividerArchive />
        <DailyList />
        <DailyList />
        <DailyList />
        <DividerArchive />
        <DailyList />
        <DailyList />
        <DailyList />
      </ScrollView>
    </Box>
  );
}

export default ReadingListView;
