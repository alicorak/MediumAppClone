import React from "react";
import Box from "../box";
import ContentImage from "./content-image";
import SvgMore from "../icons/More";
import SvgStar from "../icons/Star";
import Heading from "../text/content/heading";
import Subheading from "../text/content/subheading";

function ContentGeneral() {
  return (
    <Box flexDirection="row" bg="blackBackground">
      <Box width={235} mx={18} mt={20} mb={5}>
        <Heading>Comparing iOS UI and Custom UI Design</Heading>
        <Subheading mt={10}>What are the UI Basics in iOS Design?</Subheading>
        <Box flexDirection="row" alignItems="flex-end" mb={10}>
          <Box width={240}>
            <Subheading mt={20} color="white">
              Ali Çorak in UX Planet
            </Subheading>
            <Box flexDirection="row" alignItems="center">
              <Subheading mt={5}>23 June. 7 min read</Subheading>
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
