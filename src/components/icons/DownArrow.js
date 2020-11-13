import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownArrow(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M23.965 9.235a.8.8 0 00-1.13 0L14.6 17.469 6.366 9.235a.8.8 0 10-1.131 1.13l8.8 8.8a.798.798 0 001.13 0l8.8-8.8a.799.799 0 000-1.13z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgDownArrow;
