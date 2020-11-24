import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, color, size, typography, space } from "styled-system";

const Profile = styled(T)(compose(color, size, space, typography, size));

Profile.defaultProps = {
  fontSize: [2],
  fontWeight: "400",
  fontStyle: "normal",
  color: "white",
  letterSpacing: 0.01,
};

export default Profile;
