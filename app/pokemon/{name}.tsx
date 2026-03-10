import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function PokemonData() {
    const params = useLocalSearchParams();
    return (
        <view>
            <text>Pantalla Dinamica</text>
        </view>
    )
}