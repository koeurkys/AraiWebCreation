import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Challenges: undefined;
};
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


const mainCategories = [
  "Babysitting",
  "Petsitting",
  "Taxi",
  "Vide-grenier",
  "Jardinage",
  "Plomberie",
  "Électricité",
  "Course",
  "Nettoyage",
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      {/* Bloc accueil */}
      <View style={styles.welcomeBlock}>
        <Text style={styles.welcomeText}>Bienvenue sur ServiceApp</Text>
        <Text style={styles.subText}>Achetez ou vendez des services dès 13 ans</Text>
      </View>

      {/* Bloc accès rapide aux actions */}
      <View style={styles.quickAccess}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Search")}>
          <Text style={styles.actionText}>Rechercher un service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.actionText}>Mon profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Challenges")}>
          <Text style={styles.actionText}>Défis Hebdomadaires</Text>
        </TouchableOpacity>
      </View>

      {/* Bloc catégories */}
      <Text style={styles.sectionHeader}>Catégories populaires</Text>
      <View style={styles.categoriesContainer}>
        {mainCategories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryCard}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bloc info supplémentaire */}
      <View style={styles.infoBlock}>
        <Text style={styles.infoText}>
          ServiceApp est une plateforme pour acheter ou vendre des services tels que babysitting, jardinage, nettoyage, etc. Accessible dès 13 ans avec supervision parentale si nécessaire.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    padding: 20,
  },
  welcomeBlock: {
    marginBottom: 20,
  },
  welcomeText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    color: "#7A7A7A",
    fontSize: 16,
    marginTop: 5,
  },
  quickAccess: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#1B263B",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    marginBottom: 10,
  },
  actionText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeader: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: "#1B263B",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "48%",
    alignItems: "center",
  },
  categoryText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoBlock: {
    backgroundColor: "#1B263B",
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  infoText: {
    color: "#FFF",
    fontSize: 14,
  },
});
