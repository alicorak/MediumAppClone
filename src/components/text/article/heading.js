import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Heading = styled(T)(compose(color, size, space, typography, size));

Heading.defaultProps = {
    px:"18",
    py:"16",
    fontFamily:"Charter",
    fontSize:[5],
    fontWeight:"400",
    fontStyle: "normal",
    color:"white",
    letterSpacing: 0.01,
    lineHeight: 40,
    bg:"blackContent"
}

export default Heading;
