import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchive(props) {
  return (
    <Svg width={29} height={29} fill="none" className="" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.185 10.382h19.72v-3.48H5.185v3.48zm18.56 1.16h1.16a1.16 1.16 0 001.16-1.16v-3.48a1.16 1.16 0 00-1.16-1.16H5.185a1.16 1.16 0 00-1.16 1.16v3.48a1.16 1.16 0 001.16 1.16h1.16v10.44a1.16 1.16 0 001.16 1.16h15.08a1.16 1.16 0 001.16-1.16v-10.44zm-1.16 0H7.505v10.44h15.08v-10.44z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.985 13.282c0-.325.244-.58.557-.58h7.006c.314 0 .557.255.557.58a.57.57 0 01-.557.58h-7.006a.57.57 0 01-.557-.58z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgArchive;
