import React from "react";
import Box from "../components/box";
import ContentGeneral from "../components/content/content-general";
import ButtonFull from "../components/buttons/button-full";
import ButtonIcon from "../components/buttons/button-icon";
import Subheading from "../components/text/content/subheading";

function CreateView() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ContentGeneral></ContentGeneral>
      <ButtonFull>
        <Subheading color="white" fontSize={[1]}>
          Following
        </Subheading>
      </ButtonFull>
      <ButtonIcon />
    </Box>
  );
}
export default CreateView;
