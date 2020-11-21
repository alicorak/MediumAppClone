import React from "react";
import { View } from "react-native";
import DailyList from "../components/content/daily-list";

function ReadingListView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DailyList></DailyList>
    </View>
  );
}

export default ReadingListView;
