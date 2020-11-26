import React from "react";
import Box from "../box";
import ContentCategory from "../text/content/category"


function DividerTopic() {
  return (
    <Box bg="blackContent" height={34} flexDirection="row">
      <ContentCategory ml={18} mt={25} style={{}}>{"Based on your reading history".toUpperCase()}</ContentCategory>
    </Box>
  );
}

export default DividerTopic;
