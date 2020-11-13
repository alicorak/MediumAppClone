import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSave(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.04 6.96a2.327 2.327 0 00-2.32-2.32H9.28a2.327 2.327 0 00-2.32 2.32v17.006h.014a.555.555 0 00.541.517.58.58 0 00.417-.152l6.568-4.785 6.568 4.786a.59.59 0 00.821-.035.58.58 0 00.137-.33h.014V6.96zm-7.932 11.565L8.12 22.778V6.96c0-.638.522-1.16 1.16-1.16h10.44c.638 0 1.16.522 1.16 1.16v15.819l-5.988-4.255a.568.568 0 00-.784 0v.001z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgSave;
