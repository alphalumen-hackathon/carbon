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
            <SocialPost following credits={-750} />
            <SocialPost following={false} credits={268} />
            <SocialPost following={false} credits={-859} />
          </ScrollView>
        </View>
        <View style={styles.scrollContainer}>
          <View style={styles.topAreaContainer}>
            <Text style={styles.topAreaText}>Worldwide</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainerView}>
            <SocialPost following credits={157} />
            <SocialPost following={false} credits={-859} />
            <SocialPost following credits={-750} />
            <SocialPost following={false} credits={268} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SocialScreen;
