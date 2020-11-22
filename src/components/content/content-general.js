import React from "react";
import Box from "../box";
import ContentImage from "./content-image";
import SvgMore from "../icons/More";
import SvgStar from "../icons/Star";
import Text from "../text/text";

function ContentGeneral() {
  return (
    <Box flexDirection="row" bg="blackBackground">
      <Box width={235} mx={18} mt={20} mb={5}>
        <Text fontSize={[2]} fontWeight="400" color="white">
          Comparing iOS UI and Custom UI Design
        </Text>
        <Text mt={10} fontSize={[0]} fontWeight="500" color="graySubtitle">
          What are the UI Basics in iOS
        </Text>
        <Box flexDirection="row" alignItems="flex-end" mb={10}>
          <Box width={240}>
            <Text mt={20} fontSize={[0]} fontWeight="500" color="white">
              Ali Çorak in UX Planet
            </Text>
            <Box flexDirection="row" alignItems="center">
              <Text mt={5} fontSize={[0]} fontWeight="500" color="graySubtitle">
                23 June. 7 min read
              </Text>
              <SvgStar />
            </Box>
          </Box>
          <Box flexDirection="row" alignItems="center" ml={45}>
            <SvgMore m={12} />
            <SvgStar />
          </Box>
        </Box>
      </Box>
      <ContentImage />
    </Box>
  );
}

export default ContentGeneral;
