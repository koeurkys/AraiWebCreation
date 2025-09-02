import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 👉 tes écrans
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AdsScreen from "../screens/AdsScreen";
import ChallengesScreen from "../screens/ChallengesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryResults from "../screens/CategoryResults";

// 👉 Typage des routes
export type RootStackParamList = {
  SearchScreen: undefined;
  CategoryResults: { categoryName: string | null };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

// ✅ Stack dédié pour la recherche
function SearchStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="CategoryResults" component={CategoryResults} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0B2C4A" }} edges={["top"]}>
        <StatusBar barStyle="light-content" backgroundColor="#004d40" />

        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              switch (route.name) {
                case "Accueil":
                  iconName = "home";
                  break;
                case "Recherche":
                  iconName = "search";
                  break;
                case "Annonces":
                  iconName = "pricetag";
                  break;
                case "Défis":
                  iconName = "trophy";
                  break;
                case "Profil":
                  iconName = "person";
                  break;
                default:
                  iconName = "ellipse";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarLabelPosition: "below-icon",
          })}
        >
          <Tab.Screen name="Accueil" component={HomeScreen} />
          {/* 👉 ici on met le stack au lieu de SearchScreen direct */}
          <Tab.Screen name="Recherche" component={SearchStackNavigator} />
          <Tab.Screen name="Annonces" component={AdsScreen} />
          <Tab.Screen name="Défis" component={ChallengesScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
