import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text>Тест</Text>
    </View>
  );
}
