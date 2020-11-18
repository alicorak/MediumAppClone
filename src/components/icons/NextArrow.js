import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNextArrow(props) {
  return (
    <Svg width={29} height={29} fill="none" className="" {...props}>
      <Path
        d="M19.127 13.073L10.26 4.207a.739.739 0 00-1.045 1.045l8.344 8.343-8.344 8.344a.739.739 0 001.045 1.045l8.866-8.866a.739.739 0 000-1.045z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgNextArrow;
