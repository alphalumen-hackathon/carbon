import { TouchableOpacity, Text } from "react-native";

import FollowButtonProps from "./FollowButton.props";
import { styles } from "./FollowButton.style";

const FollowButton = (props: FollowButtonProps) => {
  const { following } = props;

  return (
    <TouchableOpacity
      style={following ? styles.containerFollowing : styles.containerFollow}
    >
      <Text style={following ? styles.textFollowing : styles.textFollow}>
        {following ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;
