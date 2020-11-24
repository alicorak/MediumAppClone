import React from "react";
import ButtonFull from "../buttons/button-full";
import SvgCheck from "../icons/Check";
import BottomName from "../text/article/bottom-name";

function ButtonIcon() {
  return (
    <ButtonFull>
      <BottomName color= "blackContent" mr={3}>Done for Today</BottomName>
      <SvgCheck/>
    </ButtonFull>
  );
}

export default ButtonIcon;
