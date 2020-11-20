import { View } from "react-native";
import styled from "styled-components";
import { compose, color, size, space, border } from "styled-system";

const Box = styled(View)(compose(color, size, space, size, border));

export default Box;
