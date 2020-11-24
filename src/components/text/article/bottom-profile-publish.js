import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const BottomProfilePublish = styled(T)(compose(color, size, space, typography, size));

BottomProfilePublish.defaultProps = {
    fontSize:"12",
    fontWeight:"400",
    fontStyle: "normal",
    color:"white",
    letterSpacing: -0.01,
    textTransform: "upppercase"

}

export default BottomProfilePublish;
