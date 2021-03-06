import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { compose, color, size, space, flexbox, border, typography} from "styled-system";

const ButtonFull = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, border, typography)
);

ButtonFull.defaultProps = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "center",
  bg: "green",
  border: "1px solid",
  borderColor: "green",
  borderRadius: "normal",
  px: "15.5px",
  py: "7.5px",
};

export default ButtonFull;
