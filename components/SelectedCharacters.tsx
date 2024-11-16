import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useCharacterStore } from "../store/characterStore";

export default function SelectedCharacters() {
  const { selectedCharacters } = useCharacterStore();

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-2">Seçilen Karakterler:</Text>
      <FlatList
        data={selectedCharacters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-2">
            <Image
              source={{ uri: item.image }}
              className="w-10 h-10 rounded-full mr-2"
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
