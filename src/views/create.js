import React from "react";
import Box from "../components/box";
import ContentGeneral from "../components/content/content-general";
import ButtonFull from "../components/buttons/button-full";
import ButtonIcon from "../components/buttons/button-icon";
import Text from "../components/text/text";

function CreateView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ContentGeneral></ContentGeneral>
      <ButtonFull>
        <Text color="white" fontSize={[1]}>
          Following
        </Text>
      </ButtonFull>
      <ButtonIcon />
    </Box>
  );
}
export default CreateView;
