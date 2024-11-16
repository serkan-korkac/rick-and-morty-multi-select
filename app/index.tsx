import { SafeAreaView, Image, View } from "react-native";
import MultiSelectAutocomplete from "../components/MultiSelectAutocomplete";
import SelectedCharacters from "../components/SelectedCharacters";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex items-center justify-center p-4 gap-4">
        <Image
          source={require("../assets/images/banner3.jpeg")}
          width={20}
          height={20}
          className="w-[200px] h-[200px] bg-cove rounded-full"
        ></Image>
        {/* <Text className="text-2xl font-bold ml-4">Rick and Morty</Text> */}
        <Image

          source={require("../assets/images/text.jpeg")}
          resizeMode="contain"
          className="w-[200px] h-[60px] bg-cover rounded-full"
        ></Image>
      </View>
      <MultiSelectAutocomplete />
      <SelectedCharacters />
    </SafeAreaView>
  );
}
