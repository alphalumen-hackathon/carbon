import { View, Text, ScrollView } from "react-native";

import { styles } from "./Social.style";
import SocialPost from "../../components/SocialPost/SocialPost.component";

const SocialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.socialText}>Social</Text>
        <Text style={styles.subtitle}>Subtítulo que eu ainda to pensando</Text>
      </View>
      <View style={styles.scrollAreaContainer}>
        <View style={styles.scrollContainer}>
          <View style={styles.topAreaContainer}>
            <Text style={styles.topAreaText}>Following</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainerView}>
            <SocialPost following credits={-750} type="Car ride" />
            <SocialPost following={false} credits={268} type="Walk" />
            <SocialPost
              following={false}
              credits={-859}
              type="Motorcycle ride"
            />
          </ScrollView>
        </View>
        <View style={styles.scrollContainer}>
          <View style={styles.topAreaContainer}>
            <Text style={styles.topAreaText}>Worldwide</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollContainerView}
            scrollIndicatorInsets={{}}
          >
            <SocialPost following credits={157} type="Bicycle ride" />
            <SocialPost following={false} credits={-859} type="Car ride" />
            <SocialPost following credits={-750} type="Car ride" />
            <SocialPost following={false} credits={268} type="Bicycle ride" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SocialScreen;
