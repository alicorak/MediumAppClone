import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSearch(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M23.278 21.962l-4.822-4.822a6.96 6.96 0 10-1.026 1.026l4.822 4.822a.724.724 0 101.026-1.026zM7.54 12.76c0-3.04 2.47-5.51 5.51-5.51 3.04 0 5.51 2.47 5.51 5.51 0 3.04-2.47 5.51-5.51 5.51-3.04 0-5.51-2.47-5.51-5.51z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgSearch;
