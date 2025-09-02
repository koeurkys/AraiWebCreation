import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation"; // adapte le chemin

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SearchScreen"
>;

const categories = [
  { name: "Babysitting", iconName: "baby-face-outline" },
  { name: "Petsitting", iconName: "dog" },
  { name: "Taxi", iconName: "taxi" },
  { name: "Jardinage", iconName: "flower" },
  { name: "Plomberie", iconName: "pipe" },
  { name: "Électricité", iconName: "flash" },
  { name: "Course", iconName: "cart" },
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const navigation = useNavigation<SearchScreenNavigationProp>();

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategoryPress = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
      navigation.navigate("CategoryResults", { categoryName });
    }
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher une catégorie..."
        placeholderTextColor="#AAA"
        value={search}
        onChangeText={setSearch}
        onFocus={() => {
          navigation.navigate("CategoryResults", { categoryName: null });
        }}
      />

      {/* Liste des catégories */}
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryCard,
              selectedCategory === item.name && { backgroundColor: "#3B5998" },
            ]}
            onPress={() => handleCategoryPress(item.name)}
          >
            <Icon name={item.iconName} size={30} color="#FFF" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A4C7A", padding: 20 },
  searchInput: {
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#B0BEC5",
    backgroundColor: "#0B2C4A",
    marginBottom: 15,
  },
  categoryCard: {
    flexDirection: "row", // icône à gauche, texte à droite
    alignItems: "center",
    backgroundColor: "#1B263B",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  categoryText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
});
