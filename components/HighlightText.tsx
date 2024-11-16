import React from "react";
import { Text, View } from "react-native";

type HighlightTextProps = {
  text: string;
  query: string;
};

export function HighlightText({ text, query }: HighlightTextProps) {
  if (!query) return <Text>{text}</Text>;

  // 'query'yi metin içinde bulup parçalayarak, eşleşen kısmı vurguluyoruz
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Text key={index} style={{ fontWeight: "bold", color: "#3b82f6" }}>
            {part}
          </Text>
        ) : (
          <Text key={index}>{part}</Text>
        )
      )}
    </View>
  );
}
