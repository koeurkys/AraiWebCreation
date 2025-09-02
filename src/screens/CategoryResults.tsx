import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation"; // adapte le chemin

type CategoryResultsRouteProp = RouteProp<RootStackParamList, "CategoryResults">;

const categories = [
  { name: "Babysitting", iconName: "baby-face-outline" },
  { name: "Petsitting", iconName: "dog" },
  { name: "Taxi", iconName: "taxi" },
  { name: "Jardinage", iconName: "flower" },
  { name: "Plomberie", iconName: "pipe" },
  { name: "Électricité", iconName: "flash" },
  { name: "Course", iconName: "cart" },
];

export default function CategoryResults() {
  const route = useRoute<CategoryResultsRouteProp>();
  const initialCategory = route.params?.categoryName || null;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );

  const handleCategoryPress = (name: string) => {
    if (selectedCategory === name) setSelectedCategory(null); // déclique
    else setSelectedCategory(name);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>
        {selectedCategory
          ? `Résultats pour "${selectedCategory}"`
          : "Choisis une catégorie"}
      </Text>

      {/* Liste des catégories en petits carrés */}
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryCard,
              selectedCategory === item.name && styles.categoryCardSelected,
            ]}
            onPress={() => handleCategoryPress(item.name)}
          >
            <Icon name={item.iconName} size={30} color="#FFF" />
            {selectedCategory === item.name && (
              <Text style={styles.categoryText}>{item.name}</Text>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Zone de résultats */}
      <View style={styles.resultsContainer}>
        {selectedCategory ? (
          <Text style={styles.resultsText}>
            🔍 Ici tu affiches les annonces liées à{" "}
            <Text style={{ fontWeight: "bold" }}>{selectedCategory}</Text>
          </Text>
        ) : (
          <Text style={styles.resultsText}>
            Sélectionne une catégorie pour voir les annonces.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A4C7A",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  categoryCard: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#1B263B",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryCardSelected: {
    backgroundColor: "#3B5998",
    width: 120, // élargit le carré pour afficher le nom
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  categoryText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 14,
  },
  resultsContainer: {
    marginTop: 20,
    backgroundColor: "#0B2C4A",
    padding: 15,
    borderRadius: 10,
  },
  resultsText: {
    color: "#B0BEC5",
    fontSize: 16,
  },
});
