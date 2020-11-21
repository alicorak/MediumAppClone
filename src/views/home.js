import React from "react";
import { SafeAreaView} from "react-native";
import Box from "../components/box";
import ContentImage from "../components/content/content-image";
import theme from "../utils/theme";

function HomeView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <ContentImage>
          
        </ContentImage>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
