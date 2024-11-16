import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface RadioButtonProps {
  value: boolean; // Seçili olup olmadığı durumu
  onValueChange: (newValue: boolean) => void; // Değişim işlemi
  children: React.ReactNode; // Etiket JSX elemanı
}

export const RadioButton: React.FC<RadioButtonProps> = ({ value, onValueChange, children }) => {
  return (
    <TouchableOpacity
      onPress={() => onValueChange(true)} // Butona tıklandığında değer değişecek
      className="flex-row items-center space-x-2 gap-2"
    >
      <View
        className={`w-5 h-5 rounded-full border-2 ${
          value ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-gray-500'
        }`} // Seçili olup olmadığını kontrol et
      >
        {value && (
          <View
            className="w-3 h-3 rounded-full bg-white m-auto"
          /> // İçeride beyaz nokta, seçili durumda olacak
        )}
      </View>
        {children}
    </TouchableOpacity>
  );
};
