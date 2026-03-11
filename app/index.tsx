import PokemonCard from "@/components/PokemonCard";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {

  const router = useRouter();
  const [results, setResult] = useState<Pokemon[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla"); 
    getPokemon();
  }, []);

  const getPokemon = async () => {

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

    const response = await fetch(URL); 
    const data = await response.json(); 

    console.log(data);

    setResult(data.results);
  };

  return (
    <ScrollView>

      <Button
        onPress={() => router.push("/pokemon")}
        title="Static Page"
      />

      {results.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}

    </ScrollView>
  );
}