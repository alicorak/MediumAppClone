import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Heading = styled(T)(compose(color, size, space, typography, size));

Heading.defaultProps = {
  fontSize: [2],
  fontWeight: "600",
  fontStyle: "normal",
  color: "white",
  letterSpacing: 0.01,
};

export default Heading;
