import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheck(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M15 4C9.477 4 5 8.477 5 14s4.477 10 10 10 10-4.477 10-10c-.006-5.52-4.48-9.994-10-10zm0 18.571A8.571 8.571 0 1123.571 14 8.58 8.58 0 0115 22.571z"
        fill="#000"
      />
      <Path
        d="M20.487 9.924a.714.714 0 00-.992 0l-6.638 6.637-2.352-2.352a.714.714 0 10-1.01 1.01l2.857 2.857a.714.714 0 001.01 0l7.143-7.143a.714.714 0 00-.018-1.01z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgCheck;
