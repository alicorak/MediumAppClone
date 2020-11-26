import React from "react";
import Box from "../box";
import ContentImage from "./content-image";
import SvgMore from "../../components/icons/More";
import SvgStar from "../../components/icons/Star";
import Profile from "../../components/text/other/profile";
import Subheading from "../../components/text/content/subheading";
import theme from "../../utils/theme";

function DailyList() {
  return (
    <Box flexDirection="row" bg="blackContent" >
      <Box width={235} mx={18} mt={20} mb={5} >
        <Profile mt={5}>Medium App Clone #1</Profile>
        <Box flexDirection="row" alignItems="center">
          <Subheading mt={5}>23 June. 7 min read</Subheading>
          <SvgStar stroke={theme.colors.graySubtitle}/>
        </Box>
        <SvgMore mt={5} stroke={theme.colors.graySubtitle}/>
      </Box>
      <ContentImage />
    </Box>
  );
}

export default DailyList;
