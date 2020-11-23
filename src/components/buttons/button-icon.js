import React from "react";
import ButtonFull from "../buttons/button-full";
import SvgCheck from "../icons/Check";
import Text from "../text/text";

function ButtonIcon() {
  return (
    <ButtonFull>
      <Text mr={3}>Done for Today</Text>
      <SvgCheck/>
    </ButtonFull>
  );
}

export default ButtonIcon;
