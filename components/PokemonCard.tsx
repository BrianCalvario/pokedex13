import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string; 
  url: string; 
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const id = url.split("/").filter(Boolean).pop(); 
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(`../pokemon/${name}`)}>
      <Image
        source={{ uri: pokemonImageURL }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{name}</Text>
      <Text>{url}</Text>
    </Pressable>
  );
}