import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgActivity(props) {
  return (
    <Svg
      width="29"
      height="29 className"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Circle cx={11} cy={11} r={10.5} fill="#41872C" stroke="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.635 5L11 6.426 11.365 5h-.73zm1.474 1.814l.883-1.228-.682-.226-.201 1.454zM9.022 5.586l.884 1.228-.202-1.454-.682.226zm5.76 9.792c-.397.43-.935.704-1.516.772l.235-.216c1.382-1.387 1.656-2.87.811-4.42l-.528-.932-.46-.97c-.15-.32-.111-.566.12-.743a.402.402 0 01.316-.077.65.65 0 01.422.288l1.368 2.41c.567.945.663 2.457-.768 3.888zm-6.374-.25l-2.41-2.41a.48.48 0 01.524-.779c.06.025.113.062.158.107l1.248 1.248a.212.212 0 10.302-.297l-1.262-1.258-.84-.84a.48.48 0 11.677-.677l1.992 1.992a.212.212 0 10.302-.297L7.112 9.925l-.566-.567a.48.48 0 010-.672.49.49 0 01.676 0l.567.557L9.78 11.24a.211.211 0 00.345-.07.211.211 0 00-.048-.232L8.086 8.946a.475.475 0 01-.144-.336.475.475 0 01.144-.336.48.48 0 01.677 0l3.36 3.35a.21.21 0 00.336-.24l-.648-1.368c-.149-.326-.11-.571.12-.749a.408.408 0 01.317-.077.667.667 0 01.422.288l1.272 2.242c.754 1.382.514 2.66-.744 3.917a2.698 2.698 0 01-2.428.792 4.488 4.488 0 01-2.367-1.306l.005.005zM10.28 7.87l1.229 1.23c-.24.287-.269.676-.072 1.094l.125.268-2.04-2.04a.47.47 0 01-.058-.216.48.48 0 01.14-.336.49.49 0 01.676 0zm4.267.99c-.182-.27-.432-.442-.715-.486a.835.835 0 00-.643.159.896.896 0 00-.341.509 1.008 1.008 0 00-.528-.27.854.854 0 00-.475.063l-1.267-1.267a.902.902 0 00-1.272 0 .893.893 0 00-.23.408.907.907 0 00-1.282-.005.898.898 0 00-.24.432c-.365-.36-.96-.36-1.296-.019a.902.902 0 000 1.277c-.144.057-.293.139-.418.264a.902.902 0 000 1.277l.298.297a.902.902 0 00-.432 1.517l2.404 2.41c.768.768 1.69 1.267 2.592 1.42.188.032.377.048.567.048.494 0 .96-.12 1.392-.336a2.832 2.832 0 002.419-.883c1.603-1.603 1.478-3.326.835-4.401l-1.377-2.42.01.005z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgActivity;
