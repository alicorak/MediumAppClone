import React from "react";
import Box from "../box";
import Text from "../text";
import theme from "../../utils/theme";


function GeneralContent() {
  return (
    <Box>
      <Text fontSize={theme.fontSize[2]} >Merhaba</Text>
      <Box
        height={72}
        width={72}
        bg="#ccc"
        borderRadius={theme.radii.small}
      ></Box>
      <Box
      mt={76}
      ml={-6}
      position = "absolute"
      height={18}
      width={18}
      bg="#ccc"
      borderColor={theme.colors.blackBackground}
      border="2px solid"
      ></Box>
    </Box>
  );
}

export default GeneralContent;
