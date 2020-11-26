import React from "react";
import Box from "../box";
import Subheading from "../text/content/subheading";
import ButtonIcon from "../buttons/button-icon";

function Detail() {
  return (
    <Box>
      <Box bg="#191919" height={90} justifyContent="center">
        <Box
          px={18}
          bg="blackContent"
          height={63}
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Subheading color="green">Become a member</Subheading>
          <ButtonIcon />
        </Box>
        <Box height={1} width="auto" bg="grayNavigation" />
      </Box>
      <Box height={1} width="auto" bg="grayNavigation" />
    </Box>
  );
}

export default Detail;
