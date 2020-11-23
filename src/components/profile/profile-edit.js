import React from "react";

import Box from "../box";
import Text from "../text/text";

import SvgNotification from "../../components/icons/Notification";
import ButtonOutline from "../../components/buttons/button-outline";

function ProfileEdit() {
  return (
    <Box bg="blackContent">
      <Box flexDirection="row" alignItems="center" p={18}>
        <Box height={64} width={64} bg="#ccc" borderRadius="full" />
        <Box ml={20} width={267}>
          <Text fontSize={[2]} fontWeight="600" mb={7} color="white">
            Ali Çorak
          </Text>
          <Text fontSize={[0]} fontWeight="500" color="grayIcon">
            iletisim@alicorak.com
          </Text>
        </Box>
      </Box>

      <Text mx={18} fontSize={[0]} fontWeight="500" color="grayIcon">
        Top writer in Design
      </Text>
      <Box flexDirection="row" mb={16}>
        <Box flexDirection="row" mx={18} my={10}>
          <Box width={85}>
            <Text fontSize={[0]} fontWeight="400" color="graySubtitle">
              98
            </Text>
            <Text fontSize={[0]} fontWeight="400" color="graySubtitle">
              Following
            </Text>
          </Box>
          <Box width={107}>
            <Text fontSize={[0]} fontWeight="400" color="graySubtitle">
              200
            </Text>
            <Text fontSize={[0]} fontWeight="400" color="graySubtitle">
              Followers
            </Text>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" px={18}>
          <SvgNotification />
          <ButtonOutline ml={12}>
            <Text color="green">Follow</Text>
          </ButtonOutline>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileEdit;
