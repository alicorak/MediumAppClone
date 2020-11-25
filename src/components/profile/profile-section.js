import React from "react";

import Box from "../box";
import Profile from "../text/other/profile";

function ProfileSection() {
  return (
    <Box>
      <Box flexDirection="row" alignItems="center" p={16} bg="blackContent">
        <Box height={56} width={56} bg="#ccc" borderRadius="full" />
        <Box ml={15} width={272}>
          <Profile mb={7}>Ali Çorak</Profile>
          <Profile color="green">View Profile</Profile>
        </Box>
      </Box>
      <Box height={1} width="auto" bg="grayNavigation" />
    </Box>
  );
}

export default ProfileSection;
