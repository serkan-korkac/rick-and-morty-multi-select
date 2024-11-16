import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity, // ActivityIndicator bileşenini import ediyoruz
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../utils/api";
import { useCharacterStore } from "../store/characterStore";
import Tag from "../components/Tag"; // Tag bileşenini dahil ediyoruz
import Item from "../components/Item"; // Item bileşenini dahil ediyoruz

export default function MultiSelectAutocomplete() {
  const [query, setQuery] = useState(""); // Arama sorgusu durumu
  const [show, setShow] = useState(true); // sonuç kutsuu görünümü
  // Zustand mağazasından seçilen karakterleri yönetin
  const { selectedCharacters, addCharacter, removeCharacter } =
    useCharacterStore();

  // React Query ile API'den veri çekme
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", query],
    queryFn: async () => {
      const response = await apiClient.get("/character", {
        params: { name: query },
      });
      return response.data.results;
    },
    enabled: !!query,
  });

  // Karakter seçme/çıkarma işlevi
  const handleSelectItem = (item: any) => {
    const isSelected = selectedCharacters.some((char) => char.id === item.id);
    if (isSelected) {
      removeCharacter(item.id); // Zaten seçiliyse, çıkar
    } else {
      addCharacter(item); // Seçili değilse, ekle
    }
  };

  return (
    <View className="p-4">
      {/* Arama Kutusu */}
      <View className="relative border rounded-lg p-2">
        <View className="flex-row justify-between">
          <TextInput
            className="flex-1"
            placeholder="Karakter Ara..."
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <TouchableOpacity onPress={() => {
            setShow(!show);
          }}>
            <Image
              source={
                show
                  ? require("../assets/images/up.png")
                  : require("../assets/images/down.png")
              }
              className="w-[20px] h-[20px] bg-cove rounded-full"
            ></Image>
          </TouchableOpacity>
        </View>
        {/* Seçilen tag'ler input içinde */}
        <View className="flex-row flex-wrap">
          {selectedCharacters.map((item) => (
            <Tag
              key={item.id}
              name={item.name}
              onRemove={() => removeCharacter(item.id)}
            />
          ))}
        </View>
      </View>

      {/* Yükleniyor Durumu - Spinner */}
      {isLoading && (
        <View className="border rounded-lg p-10 mt-4 items-center justify-center max-h-[200px]">
          <ActivityIndicator size="small" color="#0000ff" />
          <Text className="text-gray-500 mt-4">Yükleniyor...</Text>
        </View>
      )}

      {/* Hata Durumu */}
      {isError && <Text className="mt-4 text-red-500">Hata oluştu!</Text>}

      {/* Sonuç Listesi */}
      {(!isLoading && data && show) &&  (
        <FlatList
          data={data}
          className="border rounded-lg mt-4 max-h-[200px]"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            // Seçili olup olmadığını kontrol et
            const isSelected = selectedCharacters.some(
              (char) => char.id === item.id
            );

            return (
              <Item
                item={item}
                query={query}
                isSelected={isSelected}
                onSelect={() => handleSelectItem(item)}
              />
            );
          }}
        />
      )}
    </View>
  );
}
