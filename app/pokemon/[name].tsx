import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonData() {

  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Pantalla Dinamica</Text>
      <Text>{params.name}</Text>
    </View>
  );
}