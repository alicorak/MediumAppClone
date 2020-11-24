import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const BottomDescription = styled(T)(
  compose(color, size, space, typography, size)
);

BottomDescription.defaultProps = {
  fontSize: [0],
  fontWeight: "400",
  fontStyle: "normal",
  color: "graySubtitle",
  letterSpacing: -0.01,
};

export default BottomDescription;
