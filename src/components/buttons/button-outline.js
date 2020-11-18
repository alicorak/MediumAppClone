import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { compose, color, size, space, flexbox, border, typography} from "styled-system";

const ButtonOutline = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, border, typography)
);

ButtonOutline.defaultProps = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  borderColor: "#41872C",
  borderRadius: "4px",
  px: "15.5px",
  py: "7.5px",
  fontSize: '34px'
};

export default ButtonOutline;
