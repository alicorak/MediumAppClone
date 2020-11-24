import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Subheading = styled(T)(compose(color, size, space, typography, size));

Subheading.defaultProps = {
    fontSize:[2],
    fontWeight:"500",
    fontStyle: "normal",
    color:"white",
    letterSpacing: 0.0175
}

export default Subheading;
