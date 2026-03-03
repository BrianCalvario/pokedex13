import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(url); 'response'
    const data = await response.json()
    console.log (response);
  }

  return (
    <View>
      <Text>Ramses</Text>
    </View>
  );
}