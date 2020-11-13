import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStar(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M14.38 4.493c.066-.191.174-.191.238 0l2.32 6.825a.56.56 0 00.503.367h7.509c.212 0 .245.095.073.215l-6.076 4.199a.524.524 0 00-.192.562l2.32 6.825c.066.193-.02.253-.19.133l-6.074-4.214a.586.586 0 00-.618 0l-6.08 4.218c-.169.116-.256.058-.192-.131l2.32-6.825a.524.524 0 00-.19-.564l-6.076-4.22c-.168-.117-.137-.217.073-.217h7.51a.56.56 0 00.502-.368l2.32-6.805z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgStar;
