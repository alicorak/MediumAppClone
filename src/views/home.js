import React from "react";
import { SafeAreaView} from "react-native";
import Box from "../components/box";
import GeneralContent from "../components/content/general-content";
import theme from "../utils/theme";

function HomeView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <GeneralContent>
          
        </GeneralContent>
      </SafeAreaView>
    </Box>
  );
}

export default HomeView;
