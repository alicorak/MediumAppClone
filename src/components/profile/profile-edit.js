import React from "react";

import Heading from "../text/content/heading";
import Subheading from "../text/content/subheading";
import BottomDescription from "../text/article/bottom-description";

import Box from "../box";
import SvgNotification from "../../components/icons/Notification";
import ButtonOutline from "../../components/buttons/button-outline";

function ProfileEdit() {
  return (
    <Box bg="blackContent">
      <Box flexDirection="row" alignItems="center" p={18}>
        <Box height={64} width={64} bg="#ccc" borderRadius="full" />
        <Box ml={20} width={267}>
          <Heading mb={7}>Ali Çorak</Heading>
          <Subheading color="grayIcon">iletisim@alicorak.com</Subheading>
        </Box>
      </Box>

      <Subheading mx={18} color="white">
        Top writer in Design
      </Subheading>
      <Box flexDirection="row" mb={16}>
        <Box flexDirection="row" mx={18} my={10}>
          <Box width={85}>
            <BottomDescription>98</BottomDescription>
            <BottomDescription>Following</BottomDescription>
          </Box>
          <Box width={107}>
            <BottomDescription>200</BottomDescription>
            <BottomDescription>Followers</BottomDescription>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" px={18}>
          <SvgNotification />
          <ButtonOutline ml={12}>
            <Subheading color="green">Follow</Subheading>
          </ButtonOutline>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileEdit;
