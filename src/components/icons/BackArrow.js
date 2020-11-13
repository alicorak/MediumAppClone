import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBackArrow(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M10.82 13.604l8.52-8.343a.728.728 0 000-1.045.766.766 0 00-1.067 0L9.22 13.082a.728.728 0 000 1.045l9.052 8.866c.3.283.777.275 1.066-.019a.728.728 0 000-1.026l-8.518-8.344z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgBackArrow;
