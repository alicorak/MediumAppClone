import React from "react";
import Box from "../box";
import Heading from "../text/other/heading";
import SvgNotificationOff from "../../components/icons/NotificationOff";

function DailyRead() {
  return (
    <Box>
      <Box px={18} bg="blackContent" height={61}>
        <Box mt={22} flexDirection="row" alignItems="center">
          <Heading mr={3}>Your Daily Read</Heading>
          <SvgNotificationOff stroke="green" />
        </Box>
      </Box>
      <Box height={1} width="auto" bg="grayNavigation" />
    </Box>
  );
}

export default DailyRead;
