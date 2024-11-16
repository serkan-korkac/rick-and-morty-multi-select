// Tag.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface TagProps {
  name: string;
  onRemove: () => void;
}

const Tag: React.FC<TagProps> = ({ name, onRemove }) => {
  return (
    <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mt-2">
      <Text className="text-sm mr-2">{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text className="text-red-500">✕</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tag;
