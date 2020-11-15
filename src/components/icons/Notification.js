import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotification(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M22.82 17.017l-1.94-1.763v-4.23a6.379 6.379 0 00-7.006-6.35c-3.318.317-5.754 3.293-5.754 6.624v3.956l-1.949 1.801c-.236.22-.371.53-.371.852v2.973a1.16 1.16 0 001.16 1.16h4.048a3.572 3.572 0 003.492 2.842 3.572 3.572 0 003.492-2.842h4.048a1.16 1.16 0 001.16-1.16v-3.004c0-.325-.14-.638-.38-.859zm-8.32 6.531a2.23 2.23 0 01-2.102-1.508h4.204a2.227 2.227 0 01-2.102 1.508zm7.366-2.842H7.134v-2.723l1.89-1.751c.275-.25.43-.606.43-.978v-3.956c0-2.726 1.995-5.053 4.547-5.295a5.05 5.05 0 015.545 5.023v4.228c0 .376.159.734.436.986l1.884 1.713v2.753z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgNotification;