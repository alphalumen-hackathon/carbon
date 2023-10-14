import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./Social.style";
import SocialPost from "../../components/SocialPost/SocialPost.component";
import SocialPostProps from "../../components/SocialPost/SocialPost.props";

const SocialScreen = () => {
  const [feed, setFeed] = useState<SocialPostProps[]>([]);

  useEffect(() => {
    const fetchFollowingFeed = async () => {
      try {
        const response = await fetch(
          "https://carbon-api-production.up.railway.app/feed",
          {
            method: "GET",
          },
        );

        if (response.ok) {
          const data = await response.json();
          setFeed(data);
        } else {
          console.error("Failed to fetch following feed");
        }
      } catch (error) {
        console.error("Error fetching following feed:", error);
      }
    };

    fetchFollowingFeed();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.socialText}>Social</Text>
      </View>
      <View style={styles.scrollAreaContainer}>
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainerView}>
            {feed.map((item, index) => (
              <SocialPost key={index} {...item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SocialScreen;
