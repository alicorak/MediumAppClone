import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSort(props) {
  return (
    <Svg width={29} height={29} fill="none" className="" {...props}>
      <Path
        d="M14.349 7.766l-2.552-2.552a.729.729 0 00-1.031 0L8.214 7.766a.729.729 0 101.03 1.03l1.308-1.307v14.282a.73.73 0 001.458 0V7.489l1.308 1.308a.726.726 0 001.03 0 .73.73 0 000-1.031zM22.505 18.703a.729.729 0 00-1.031 0l-1.307 1.308V5.729a.73.73 0 00-1.459 0v14.282l-1.307-1.308a.729.729 0 10-1.031 1.031l2.552 2.552a.726.726 0 001.03 0l2.553-2.552a.73.73 0 000-1.03z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgSort;
