import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Modal,
  Switch,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const { height, width } = Dimensions.get("window");

const menuData = [
  {
    section: "Snacks",
    items: [
      {
        id: 1,
        name: "Veggie Spring Rolls",
        price: "₹249",
        description: "Crispy spring rolls filled with fresh vegetables.",
        category: "Veg",
        image: require("../assets/images/spring-rolls.jpeg"),
      },
      {
        id: 2,
        name: "Garlic Bread",
        price: "₹199",
        description: "Freshly baked garlic bread with melted butter.",
        category: "Veg",
        image: require("../assets/images/garlic-bread.jpeg"),
      },
      {
        id: 3,
        name: "Chicken Wings",
        price: "₹349",
        description: "Spicy and flavorful chicken wings.",
        category: "Non-Veg",
        image: require("../assets/images/chicken-wings.jpeg"),
      },
      {
        id: 4,
        name: "Fries Platter",
        price: "₹275",
        description: "A mix of regular, sweet potato, and curly fries.",
        category: "Veg",
        image: require("../assets/images/fries-platter.jpeg"),
      },
    ],
  },
  {
    section: "Main Course",
    items: [
      {
        id: 5,
        name: "Grilled Chicken",
        price: "₹1199",
        description: "Juicy grilled chicken served with mashed potatoes.",
        category: "Non-Veg",
        image: require("../assets/images/grilled-chicken.jpeg"),
      },
      {
        id: 6,
        name: "Pasta Alfredo",
        price: "₹999",
        description: "Creamy Alfredo pasta topped with Parmesan cheese.",
        category: "Veg",
        image: require("../assets/images/pasta-alfredo.jpeg"),
      },
      {
        id: 7,
        name: "Beef Steak",
        price: "₹1499",
        description: "Tender beef steak cooked to perfection.",
        category: "Non-Veg",
        image: require("../assets/images/beef-steak.jpeg"),
      },
      {
        id: 8,
        name: "Vegetable Stir Fry",
        price: "₹849",
        description: "Fresh vegetables stir-fried with soy sauce.",
        category: "Veg",
        image: require("../assets/images/veg-stir-fry.jpeg"),
      },
    ],
  },
  {
    section: "Beverages",
    items: [
      {
        id: 9,
        name: "Cappuccino",
        price: "₹199",
        description: "Classic cappuccino with rich foam.",
        category: "Veg",
        image: require("../assets/images/cappuccino.jpeg"),
      },
      {
        id: 10,
        name: "Lemon Iced Tea",
        price: "₹149",
        description: "Refreshing iced tea with a hint of lemon.",
        category: "Veg",
        image: require("../assets/images/lemon-iced-tea.jpeg"),
      },
      {
        id: 11,
        name: "Smoothie Bowl",
        price: "₹249",
        description: "Fruity smoothie bowl topped with granola.",
        category: "Veg",
        image: require("../assets/images/smoothie-bowl.jpeg"),
      },
      {
        id: 12,
        name: "Milkshake",
        price: "₹199",
        description: "Thick and creamy milkshake in various flavors.",
        category: "Veg",
        image: require("../assets/images/milkshake.jpeg"),
      },
    ],
  },
  {
    section: "Bakery",
    items: [
      {
        id: 13,
        name: "Croissant",
        price: "₹149",
        description: "Buttery and flaky croissant.",
        category: "Veg",
        image: require("../assets/images/croissant.jpeg"),
      },
      {
        id: 14,
        name: "Blueberry Muffin",
        price: "₹175",
        description: "Soft muffin loaded with fresh blueberries.",
        category: "Veg",
        image: require("../assets/images/blueberry-muffin.jpeg"),
      },
      {
        id: 15,
        name: "Chocolate Chip Cookies",
        price: "₹125",
        description: "Freshly baked cookies with gooey chocolate chips.",
        category: "Veg",
        image: require("../assets/images/choco-chip-cookies.jpeg"),
      },
      {
        id: 16,
        name: "Banana Bread",
        price: "₹199",
        description: "Moist banana bread with a hint of cinnamon.",
        category: "Veg",
        image: require("../assets/images/banana-bread.jpeg"),
      },
    ],
  },
  {
    section: "Desserts",
    items: [
      {
        id: 17,
        name: "Chocolate Lava Cake",
        price: "₹499",
        description: "Warm chocolate cake with a gooey center.",
        category: "Veg",
        image: require("../assets/images/lava-cake.jpeg"),
      },
      {
        id: 18,
        name: "Cheesecake",
        price: "₹399",
        description: "Classic cheesecake with a graham cracker crust.",
        category: "Veg",
        image: require("../assets/images/cheesecake.jpeg"),
      },
      {
        id: 19,
        name: "Tiramisu",
        price: "₹549",
        description: "Italian dessert with layers of mascarpone and espresso.",
        category: "Veg",
        image: require("../assets/images/tiramisu.jpeg"),
      },
      {
        id: 20,
        name: "Ice Cream Sundae",
        price: "₹349",
        description: "Sundae topped with nuts, chocolate syrup, and a cherry.",
        category: "Veg",
        image: require("../assets/images/ice-cream-sundae.jpeg"),
      },
    ],
  },
  {
    section: "Specials",
    items: [
      {
        id: 21,
        name: "Chef's Special Platter",
        price: "₹1599",
        description: "A mix of the chef's finest dishes.",
        category: "Non-Veg",
        image: require("../assets/images/chefs-platter.jpeg"),
      },
      {
        id: 22,
        name: "Seafood Paella",
        price: "₹1849",
        description: "Traditional Spanish rice dish with fresh seafood.",
        category: "Non-Veg",
        image: require("../assets/images/paella.jpeg"),
      },
      {
        id: 23,
        name: "BBQ Ribs",
        price: "₹1499",
        description: "Tender ribs glazed with a smoky BBQ sauce.",
        category: "Non-Veg",
        image: require("../assets/images/bbq-ribs.jpeg"),
      },
      {
        id: 24,
        name: "Stuffed Bell Peppers",
        price: "₹1199",
        description: "Bell peppers stuffed with a savory filling.",
        category: "Veg",
        image: require("../assets/images/stuffed-peppers.jpeg"),
      },
    ],
  },
];

const ExtendedMenu = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(menuData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isVegOnly, setIsVegOnly] = useState(false);

  const flatListRef = useRef<FlatList<{ section: string; items: any[] }>>(null);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filterMenuData = () => {
    const filtered = menuData
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (isVegOnly ? item.category === "Veg" : true)
        ),
      }))
      .filter((section) => section.items.length > 0);

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterMenuData();
  }, [searchText, isVegOnly]);

  const handleSwitchChange = (value: boolean) => {
    setIsVegOnly(value);
  };

  const handleSectionSelect = (section: any) => {
    setSelectedSection(section);
    scrollToSection(section);
    setModalVisible(false);
  };

  const scrollToSection = (section: any) => {
    if (flatListRef.current) {
      const index = filteredData.findIndex((item) => item.section === section);
      if (index >= 0) {
        flatListRef.current.scrollToIndex({ animated: true, index: index });
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search Menu..."
          value={searchText}
          onChangeText={handleSearch}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              backgroundColor: "#4caf50",
              color: "white",
              padding: 4,
              paddingHorizontal: 8,
              borderRadius: 5,
            }}
          >
            Veg Only
          </Text>
          <Switch value={isVegOnly} onValueChange={setIsVegOnly} />
        </View>
      </View>

      {/* Menu List */}
      <FlatList
        ref={flatListRef}
        data={filteredData}
        keyExtractor={(item) => item.section}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>{item.section}</Text>
            <FlatList
              data={item.items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const bgColor = item.category === "Veg" ? "#4caf50" : "#de4755";
                return (
                  <View
                    style={[styles.sectionItem, { backgroundColor: bgColor }]}
                  >
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemDescription}>
                        {item.description}
                      </Text>
                      <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                  </View>
                );
              }}
              nestedScrollEnabled
            />
          </View>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>MENU</Text>
      </TouchableOpacity>

      {/* Popup Modal for Section Selection */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Section</Text>
            {menuData.map((section) => (
              <TouchableOpacity
                key={section.section}
                onPress={() => handleSectionSelect(section.section)}
                style={styles.modalItem}
              >
                <Text style={styles.modalItemText}>{section.section}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#de9e55",
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  searchBox: {
    height: 40,
    width: "60%",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(158, 153, 153, 0.5)",
    padding: 8,
    marginVertical: 10,
  },
  sectionItem: {
    borderRadius: 8,
    marginVertical: 8,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    elevation: 5,
    marginHorizontal: 10,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
    alignSelf: "center",
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 16,
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    maxWidth: "34%",
    left: 146,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
    flexWrap: "wrap",
  },
  floatingButton: {
    position: "absolute",
    bottom: 6,
    alignSelf: "center",
    backgroundColor: "rgba(249, 97, 10, 0.9)",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 5,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: width * 0.8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalItemText: {
    fontSize: 18,
    color: "#333",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#de4755",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ExtendedMenu;
