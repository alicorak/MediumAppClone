import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Text = styled(T)(compose(color, size, space, typography, size));

Text.defaultProps = {
    fontFamily:"Charter",
    fontSize:[1],
    fontWeight:"400",
    fontStyle: "normal",
    color:"white",
    letterSpacing: -0.03

}

export default Text;
