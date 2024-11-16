// Item.tsx
import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { RadioButton } from "./RadioButton";
import { HighlightText } from "./HighlightText";

interface ItemProps {
  item: any;
  query: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Item: React.FC<ItemProps> = ({ item, query, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center p-2 border-b"
      onPress={onSelect} // Seçim işlemi
    >
      {/* RadioButton kullanımı */}
      <RadioButton value={isSelected} onValueChange={onSelect}>
        <Image
          source={{ uri: item.image }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View className="flex-1">
          {/* HighlightText bileşenini burada kullanıyoruz */}
          <Text className="text-lg">
            <HighlightText text={item.name} query={query} /> {/* Vurgulama */}
          </Text>
          <Text className="text-sm text-gray-500">
            Bölüm Sayısı: {item.episode.length}
          </Text>
        </View>
      </RadioButton>
    </TouchableOpacity>
  );
};

export default Item;
