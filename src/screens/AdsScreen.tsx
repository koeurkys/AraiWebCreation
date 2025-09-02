import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";

const services = [
  { id: 1, name: "Babysitting", available: "19:00", price: 30, image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Petsitting", available: "16:00", price: 20, image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Taxi", available: "13:00", price: 15, image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Jardinage", available: "09:00", price: 25, image: "https://i.pravatar.cc/150?img=4" },
];

export default function AdsScreen() {
  const [search, setSearch] = useState("");

  // Filtrage des services
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un service..."
        placeholderTextColor="#AAA"
        value={search}
        onChangeText={setSearch}
      />
      {filteredServices.map(service => (
        <View key={service.id} style={styles.card}>
          <Image source={{ uri: service.image }} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.title}>{service.name}</Text>
            <Text style={styles.available}>Disponible à {service.available}</Text>
            <Text style={styles.price}>{service.price} €/heure</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1A4C7A",
  },
  searchInput: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#B0BEC5",
    backgroundColor: "#0B2C4A",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B2C4A",
    borderRadius: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  available: {
    color: "#B0BEC5",
    marginTop: 3,
  },
  price: {
    color: "#FFF",
    marginTop: 5,
    fontWeight: "bold",
  },
});
