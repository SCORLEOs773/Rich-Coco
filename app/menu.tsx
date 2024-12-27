import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const { height, width } = Dimensions.get("window");

const Menu = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    require("../assets/images/blueberry-muffin.jpeg"),
    require("../assets/images/cheesecake.jpeg"),
    require("../assets/images/garlic-bread.jpeg"),
    require("../assets/images/croissant.jpeg"),
    require("../assets/images/chicken-wings.jpeg"),
    require("../assets/images/cappuccino.jpeg"),
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (width - 30));
    setCurrentIndex(index);
  };

  return (
    <View style={styles.menu_background}>
      {/* Hero Carousel */}
      <View style={styles.heroCarouselGroup}>
        <Text style={styles.heroHeader}>Best in Coffee</Text>
        <View style={styles.heroCarousel}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={data}
            key={data.length}
            onScroll={handleScroll}
            renderItem={({ item, index }) => (
              <View style={styles.heroCarouselItem}>
                <ImageBackground
                  source={require("../assets/images/coffee-image.png")}
                  style={styles.heroImageBackground}
                  resizeMode="cover"
                >
                  {/* Overlay Container */}
                  <View style={styles.overlayContainer}>
                    {/* Title */}
                    <Text style={styles.cardTitle}>Espresso Delight</Text>

                    {/* Description */}
                    <Text style={styles.cardDescription}>
                      A rich, full-bodied espresso with a hint of caramel.
                    </Text>

                    {/* Price */}
                    <Text style={styles.cardPrice}>₹150</Text>
                  </View>

                  {/* Action Button */}
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.cardButton}>Order Now</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )}
          />
        </View>
        <View
          className="hero-carousel-indicator-group"
          style={styles.indicatorStyle}
        >
          {data &&
            data.map((item, index) => (
              <View
                key={index}
                style={{
                  width: currentIndex === index ? 10 : 8,
                  height: currentIndex === index ? 10 : 8,
                  borderRadius: currentIndex === index ? 5 : 4,
                  backgroundColor: currentIndex === index ? "brown" : "gray",
                  marginLeft: 5,
                }}
              ></View>
            ))}
        </View>
      </View>

      <View style={styles.button}>
        <Link href="/extendedMenu" asChild>
          <Text style={styles.buttonText}>MENU</Text>
        </Link>
      </View>

      {/* Photo Gallery Section */}
      <View style={styles.gallerySection}>
        <Text style={styles.galleryHeader}>Photo Gallery</Text>
        <ScrollView contentContainerStyle={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <Image key={index} source={image} style={styles.galleryImage} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu_background: {
    flex: 1,
    backgroundColor: "wheat",
    width: "100%",
    height: "100%",
  },
  heroCarouselGroup: {
    marginTop: 20,
  },
  heroHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f68e17",
  },
  heroCarousel: {
    marginTop: 20,
    height: height / 3.2,
    width: "100%",
  },
  indicatorStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  heroCarouselItem: {
    backgroundColor: "#c68e17",
    borderRadius: 10,
    width: width - 30,
    height: height / 3.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
    overflow: "hidden",
  },
  heroImageBackground: {
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f68e17",
  },
  touchableOpacity: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#f68e17",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  cardButton: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#f68e17",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  gallerySection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  galleryHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f68e17",
    marginBottom: 10,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  galleryImage: {
    width: width / 3.5,
    height: width / 3.5,
    marginBottom: 10,
    borderRadius: 10,
  },
});
