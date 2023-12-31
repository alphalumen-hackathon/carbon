import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import FollowButtonProps from "./FollowButton.props";
import { styles } from "./FollowButton.style";

const FollowButton = (props: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(props.following);

  const handleFollowToggle = async () => {
    try {
      const route = isFollowing ? "unfollow" : "follow";

      setIsFollowing(!isFollowing);

      const response = await fetch(
        `https://carbon-api-production.up.railway.app/${route}/${props.user.username}`,
        { method: "GET" },
      );

      if (!response.ok) {
        // Catch any errors that may occur during the process and
        // "rollback" the changes to the state.
        setIsFollowing(isFollowing);
        console.error("Failed to follow/unfollow user");
      }
    } catch (error) {
      // Same as above.
      setIsFollowing(isFollowing);
      console.error("Error following/unfollowing user:", error);
    }
  };

  return (
    <TouchableOpacity
      style={isFollowing ? styles.containerFollowing : styles.containerFollow}
      onPress={handleFollowToggle}
    >
      <Text style={isFollowing ? styles.textFollowing : styles.textFollow}>
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;
