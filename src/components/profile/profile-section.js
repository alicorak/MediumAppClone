import React from "react";

import Box from "../box";
import Text from "../text/text";

function ProfileSection() {
  return (
    <Box flexDirection="row" alignItems="center" p={16} bg="blackContent">
      <Box height={56} width={56} bg="#ccc" borderRadius="full" />
      <Box ml={15} width={272}>
        <Text fontSize={[1]} fontWeight="400" mb={7} color="white" >Ali Çorak</Text>
        <Text fontSize={[1]} fontWeight="400" color="green" >View Profile</Text>
      </Box>
    </Box>
  );
}

export default ProfileSection;
