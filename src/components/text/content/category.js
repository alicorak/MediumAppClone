import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Category = styled(T)(compose(color, size, space, typography, size));

Category.defaultProps = {
  fontSize: [0],
  fontWeight: "400",
  fontStyle: "normal",
  color: "white",
  letterSpacing: 0.035,
};

export default Category;
