import React from "react";
import ButtonOutline from "../buttons/button-outline";
import SvgCheck from "../icons/Check";
import BottomName from "../text/article/bottom-name";

function ButtonIcon() {
  return (
    <ButtonOutline mx={18} my={18}>
      <BottomName mr={3}>Done for Today</BottomName>
      <SvgCheck stroke="white" height={23} width={23} />
    </ButtonOutline>
  );
}

export default ButtonIcon;
