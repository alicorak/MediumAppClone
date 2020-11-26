import React from "react";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import Box from "../box";
import Title from "../text/header/title";

function DividerArchive() {
  return (
    <Box>
      <Box bg="grayNavigation">
        <Title mx={18} mt={23} mb={9}>
          Past 7 Days
        </Title>
      </Box>
      <Box height={1} width="auto" bg="grayNavigation" />
    </Box>
  );
}

export default DividerArchive;
