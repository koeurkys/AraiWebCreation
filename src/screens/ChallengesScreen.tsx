import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Exemple de données des défis
const weeklyChallenges = [
  { id: 1, title: "Inviter un ami", xp: 500, done: true },
  { id: 2, title: "Compléter votre compte", xp: 1000, done: false },
  { id: 3, title: "Ajouter une méthode de paiement", xp: 1000, done: true },
  { id: 4, title: "Répondre à 3 demandes", xp: 700, done: false },
  { id: 5, title: "Donner votre premier avis", xp: 300, done: true },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Défis Hebdomadaires</Text>

      {weeklyChallenges.map((challenge) => (
        <View key={challenge.id} style={styles.challengeCard}>
          <View style={styles.challengeInfo}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <Text style={styles.challengeXp}>+{challenge.xp} XP</Text>
          </View>
          <View
            style={[
              styles.checkbox,
              { backgroundColor: challenge.done ? "#4CAF50" : "transparent",
                borderWidth: challenge.done ? 0 : 4,
                borderColor: challenge.done ? "transparent" : "#0e3457ff",
               },
            ]}
          >
            {challenge.done && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color="#0B2C4A"
              />
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A4C7A",
    padding: 20,
  },
  header: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  challengeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B2C4A",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  challengeInfo: {
    flex: 1,
    paddingRight: 20,
  },
  challengeTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  challengeXp: {
    color: "#B0BEC5",
    marginTop: 3,
    fontSize: 14,
  },
  checkbox: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: "center",
    justifyContent: "center",
  },

  checkmark: {
    color: "#FFF",
    fontSize: 14,
  },
});
