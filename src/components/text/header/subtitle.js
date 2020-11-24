import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Subtitle = styled(T)(compose(color, size, space, typography, size));

Subtitle.defaultProps = {
    fontSize:"12",
    fontWeight:"400",
    fontStyle: "normal",
    color:"white",
}

export default Subtitle;
