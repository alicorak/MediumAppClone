import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Subheading = styled(T)(compose(color, size, space, typography, size));

Subheading.defaultProps = {
  fontSize: [0],
  fontWeight: "500",
  fontStyle: "normal",
  color: "graySubtitle",
  letterSpacing: -0.01,
};

export default Subheading;
