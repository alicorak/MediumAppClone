import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSaveFill(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M22.04 6.96a2.32 2.32 0 00-2.32-2.32H9.28a2.32 2.32 0 00-2.32 2.32v17.006h.012a.583.583 0 00.139.324.58.58 0 00.812.035l6.577-4.779 6.566 4.79a.596.596 0 00.823-.034.58.58 0 00.14-.336h.011V6.96z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgSaveFill;
