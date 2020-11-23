import React from "react";
import Box from "../box";
import ContentImage from "./content-image";
import SvgMore from "../../components/icons/More";
import SvgStar from "../../components/icons/Star";
import Text from "../../components/text/text";

function DailyList() {
  return (
    <Box flexDirection="row" bg="blackContent">
      <Box width={235} mx={18} mt={20} mb={5}>
        <Text mt={5} fontSize={[2]} fontWeight="400" color="white">
          Medium App Clone #1
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Text mt={5} fontSize={[0]} fontWeight="500" color="graySubtitle">
            23 June. 7 min read
          </Text>
          <SvgStar />
        </Box>
        <SvgMore mt={5} />
      </Box>
      <ContentImage />
    </Box>
  );
}

export default DailyList;
