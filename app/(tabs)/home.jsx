import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { icons } from "../../constants"; // Importing icons from constants folder
import styles from "../../stylesheetHome"; // Importing styles from external stylesheet

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Profile Image */}
        <Image
          source={require("../../assets/images/profilepic.jpeg")}
          style={styles.profileImage}
        />
        {/* Header Icons (Search, Bookmark, Notifications) */}
        <View style={styles.headerIcons}>
          <Image source={icons.search} style={styles.icon} />
          <Image source={icons.bookmark} style={styles.icon} />
          <Image source={icons.notifications} style={styles.icon} />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView>
        {/* Workout Plan Banner */}
        <TouchableOpacity style={styles.banner}>
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Need a Workout Plan?</Text>
          </View>
        </TouchableOpacity>

        {/* Start New Goal Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Start New Goal</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalCardRow}>
              {/* Card 1 - Cardio Workout */}
              <View style={styles.cardLarge}>
                <Image
                  source={require("../../assets/images/hiit.jpg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  {/* Difficulty Level */}
                  <Text style={styles.cardLevel}>Beginner</Text>
                  {/* Favorite Icon */}
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Get Started with Cardio</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>120 Min</Text>
                </View>
              </View>

              {/* Card 2 - Lifting for Beginners */}
              <View style={styles.cardLarge}>
                <Image
                  source={require("../../assets/images/lifting.jpg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardLevel}>Beginner</Text>
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Lifting for Beginners</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>90 Min</Text>
                </View>
              </View>

              {/* Card 3 - Low Impact Barre */}
              <View style={styles.cardLarge}>
                <Image
                  source={require("../../assets/images/barre.jpg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardLevel}>Beginner</Text>
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Low Impact Barre</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>30 Min</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Featured Recipes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Recipes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalCardRow}>
              {/* Recipe 1 - Shakshuka */}
              <View style={styles.cardMedium}>
                <Image
                  source={require("../../assets/images/Shakshuka.jpeg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  {/* Calorie Info */}
                  <Text style={styles.cardLevel}>354 Kcal</Text>
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Shakshuka</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>30 Min</Text>
                </View>
              </View>

              {/* Recipe 2 - Korean Bibimbap */}
              <View style={styles.cardMedium}>
                <Image
                  source={require("../../assets/images/Korean Bibimbap.jpeg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardLevel}>689 Kcal</Text>
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Korean Bibimbap</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>1 Hr 10 Min</Text>
                </View>
              </View>

              {/* Recipe 3 - Overnight Oats */}
              <View style={styles.cardMedium}>
                <Image
                  source={require("../../assets/images/Overnight Oats.jpeg")}
                  style={styles.cardImage}
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardLevel}>272 Kcal</Text>
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Image source={icons.bookmark2} style={styles.iconSmall} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.cardTitle}>Overnight Oats</Text>
                <View style={styles.timeContainer}>
                  <Image source={icons.clock} style={styles.iconSmall} />
                  <Text style={styles.cardDuration}>25 Min</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Featured Collections Section */}
        <View style={styles.featuredCollectionsSection}>
          <Text style={styles.featuredCollectionsTitle}>
            Featured Collections
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.featuredCardRowContainer}>
              {/* First Row of Featured Collections */}
              <View style={styles.featuredHorizontalCardRow}>
                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/gmb-fitness-l5ilSNeT92Y-unsplash.jpg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>
                      Flexibility & Mobility
                    </Text>
                  </View>
                </View>

                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/nate-johnston-WEfD8q8oz7U-unsplash.jpg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>
                      Low-Impact Workouts
                    </Text>
                  </View>
                </View>

                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/alora-griffiths-AkEr0jc5Lvs-unsplash.jpg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>
                      Strength Conditioning
                    </Text>
                  </View>
                </View>
              </View>

              {/* Second Row of Featured Collections */}
              <View style={styles.featuredHorizontalCardRow}>
                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/chander-r-AtfA8NDgpKA-unsplash.jpg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>Cardio</Text>
                  </View>
                </View>

                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/victor-freitas-_Vf2AYIBXVY-unsplash.jpg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>
                      Functional Workouts
                    </Text>
                  </View>
                </View>

                <View style={styles.featuredCardMedium2}>
                  <Image
                    source={require("../../assets/images/home workout set in pink_.jpeg")}
                    style={styles.featuredCardImage}
                  />
                  <View style={styles.featuredCardOverlay}>
                    <Text style={styles.featuredCardTitle}>Home Workouts</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
