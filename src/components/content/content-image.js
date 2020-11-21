import React from "react";
import Box from "../box";
import theme from "../../utils/theme";

function ContentImage() {
  return (
    <Box height={76} width={76}
    mx={15}
    my={15}
    >
      <Box
        height={72}
        width={72}
        bg="#ccc"
        borderRadius={theme.radii.small}
      ></Box>
      <Box
        mt={58}
        ml={-6}
        position="absolute"
        height={18}
        width={18}
        bg="#ccc"
        borderColor={theme.colors.blackBackground}
        border="2px solid"
      ></Box>
    </Box>
  );
}

export default ContentImage;
