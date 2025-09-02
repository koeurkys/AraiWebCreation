import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const user = {
  name: "Jean Dupont",
  photo: "https://randomuser.me/api/portraits/men/32.jpg", // photo de profil
  xp: 10005,
  title: "Apprenti confirmé",
  purchases: 12,
  sales: 8,
  seniority: "6 mois",
  verified: true,
  badges: ["Confirmé", "Certifié", "Top vendeur"],
  contact: {
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    idCard: "123456789",
    parentalConsent: true,
  },
  categoryXp: {
    Babysitting: 300,
    Taxi: 1225,
    Jardinage: 2050,
  },
};

// Génération des XP cumulés par niveau avec progression quadratique
const generateLevelCaps = (maxLevel = 100, baseXp = 100) => {
  const caps: number[] = [0];
  for (let i = 1; i <= maxLevel; i++) {
    const xp = Math.round(Math.pow(i, 1.5) * baseXp);
    caps.push(caps[i - 1] + xp);
  }
  return caps;
};

const levelCaps = generateLevelCaps(1000, 100);
console.log(levelCaps);
export default function ProfileScreen() {
  // Déterminer le niveau actuel
  let currentLevel = 1;
  for (let i = 1; i < levelCaps.length; i++) {
    if (user.xp >= levelCaps[i]) currentLevel = i;
    else break;
  }

  let prevLevelXp = levelCaps[currentLevel - 1];
  let nextLevelXp = levelCaps[currentLevel];
  let currentLevelXp = user.xp - prevLevelXp;
  let levelXpMax = nextLevelXp - prevLevelXp;

  // Passage au niveau suivant si barre pleine
  if (currentLevelXp >= levelXpMax) {
    currentLevel += 1;
    prevLevelXp = levelCaps[currentLevel - 1] || 0;
    nextLevelXp = levelCaps[currentLevel] || prevLevelXp + 1000;
    currentLevelXp -= levelXpMax;
    levelXpMax = nextLevelXp - prevLevelXp;
  }

  const xpPercentage = (currentLevelXp / levelXpMax) * 100;

  return (
    <LinearGradient
      colors={["#892fb2ff", "#0B2C4A"]} // du bleu clair au bleu foncé par exemple
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {/* Bloc 1 : Profil */}
        <View style={styles.blockProfil}>
          <View>
            <Image source={{ uri: user.photo }} style={styles.photo} />
          </View>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.title}>
              Niveau {currentLevel} - {user.title}
            </Text>

            <View style={styles.xpContainer}>
              <View style={[styles.xpBar, { width: `${xpPercentage}%` }]} />
            </View>
            <Text style={styles.xpText}>
              {currentLevelXp} / {levelXpMax} XP
            </Text>
          </View>
        </View>

        {/* Bloc 2 : Statistiques */}
        <View style={styles.block}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.purchases}</Text>
              <Text style={styles.statLabel}>Achats</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.sales}</Text>
              <Text style={styles.statLabel}>Ventes</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.seniority}</Text>
              <Text style={styles.statLabel}>Ancienneté</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {user.verified ? "✔️" : "❌"}
              </Text>
              <Text style={styles.statLabel}>Confirmé</Text>
            </View>
          </View>
        </View>

        {/* Bloc 3 : Badges & Contact */}
        <View style={styles.block}>
          <Text style={styles.blockHeader}>Badges</Text>
          <View style={styles.blockBadge}>
            <View style={styles.badgesContainer}>
              {user.badges.map((badge, index) => {
                // Définition de l'icône selon le badge
                let iconName = "shield-outline";
                let iconColor = "#FFD700"; // vert par défaut

                if (badge === "Confirmé") iconName = "shield-check";
                if (badge === "Certifié") iconName = "shield-star";
                if (badge === "Top vendeur") iconName = "shield-account";

                return (
                  <View key={index} style={styles.badge}>
                    <MaterialCommunityIcons
                      name={iconName}
                      size={40}
                      color={iconColor}
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.badgeText}>{badge}</Text>
                  </View>
                );
              })}
            </View>

            {/* Contact */}
            <View style={styles.contactContainer}>
              <View style={{ flexDirection: "row" }}>
                {user.contact.email.length !== 0 && (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color="#4CAF50"
                    style={{ marginRight: 5 }}
                  />
                )}
                <Text style={styles.contactText}>Email</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {user.contact.phone.length !== 0 && (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color="#4CAF50"
                    style={{ marginRight: 5 }}
                  />
                )}
                <Text style={styles.contactText}>Téléphone</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {user.contact.idCard.length !== 0 && (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color="#4CAF50"
                    style={{ marginRight: 5 }}
                  />
                )}
                <Text style={styles.contactText}>Carte d'ID</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {user.contact.parentalConsent && (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color="#4CAF50"
                    style={{ marginRight: 5 }}
                  />
                )}
                <Text style={styles.contactText}>Accord parental</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bloc 4 : Niveau par catégorie */}
        <View style={styles.block}>
          <Text style={styles.blockHeader}>Niveau par catégorie</Text>
          {Object.entries(user.categoryXp).map(([category, xp], index) => {
            // Calcul du niveau et de la progression (exemple simplifié)
            const maxLevel = 5; // Niveau max pour la barre
            const level = Math.min(Math.floor(xp / 1000) + 1, maxLevel); // Niveau basé sur XP
            const xpPercentage = ((xp % 1000) / 1000) * 100; // % progression vers le niveau suivant

            return (
              <View key={index} style={styles.categoryRow}>
                {/* Catégorie à gauche */}
                <Text style={styles.categoryName}>{category}</Text>

                {/* Niveau + barre d'XP à droite */}
                <View style={styles.levelContainer}>
                  <Text style={styles.levelText}>Niveau {level}</Text>
                  <View style={styles.levelBarBackground}>
                    <View
                      style={[
                        styles.levelBarFill,
                        { width: `${xpPercentage}%` },
                      ]}
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Bouton Premium */}
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>Devenir vendeur premium</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2F6BB2", padding: 20 },
  block: {
    backgroundColor: "#0B2C4A",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  blockProfil: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0B2C4A",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  photo: { borderRadius: 50, width: 70, height: 70, marginRight: 16 },
  name: { color: "#FFF", fontSize: 22, fontWeight: "bold" },
  title: { color: "#B0BEC5", fontSize: 16, marginTop: 5 },
  level: { color: "#FFF", fontSize: 16, marginTop: 5 },
  blockHeader: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  blockBadge: {
    display: "flex",
    flexDirection: "row",
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statItem: { alignItems: "center", marginBottom: 10, width: "25%" },
  statNumber: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  statLabel: { color: "#B0BEC5", fontSize: 14, marginTop: 3 },
  badgesContainer: { flexDirection: "column", flexWrap: "wrap" },
  badge: {
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  badgeText: { color: "#FFF", fontSize: 14 },
  contactContainer: {
    justifyContent: "flex-end",
  },
  contactText: { color: "#FFF", fontSize: 16, marginBottom: 5 },
  categoryXp: { color: "#FFF", fontSize: 16, marginBottom: 5 },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  categoryName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  levelContainer: {
    width: "50%",
    flexDirection: "row",
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  levelText: {
    color: "#B0BEC5",
    fontSize: 14,
    marginRight: 10,
  },
  levelBarBackground: {
    height: 6,
    width: "50%",
    backgroundColor: "#0e3457ff",
    borderRadius: 3,
    overflow: "hidden",
  },
  levelBarFill: {
    height: "100%",
    backgroundColor: "#FBC02D",
    borderRadius: 3,
  },

  premiumButton: {
    backgroundColor: "#0B2C4A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  premiumButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  xpContainer: {
    height: 7,
    backgroundColor: "#0e3457ff",
    borderRadius: 3.5,
    overflow: "hidden",
    marginTop: 10,
  },
  xpBar: {
    height: "100%",
    backgroundColor: "#FBC02D",
    borderTopRightRadius: 3.5,
    borderBottomRightRadius: 3.5,
  },
  xpText: { color: "#FFF", fontSize: 16, marginTop: 5, textAlign: "left" },
});
