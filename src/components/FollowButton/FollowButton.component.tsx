import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import FollowButtonProps from "./FollowButton.props";
import { styles } from "./FollowButton.style";

const FollowButton = (props: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(props.following);

  const handleFollowToggle = async () => {
    try {
      const route = isFollowing ? "unfollow" : "follow";

      const response = await fetch(
        `https://carbon-api-production.up.railway.app/${route}/${props.user.username}`,
        {
          method: "GET",
        },
      );

      if (response.ok) {
        setIsFollowing(!isFollowing);
      } else {
        console.error("Failed to follow/unfollow user");
      }
    } catch (error) {
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
