import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function Contacts() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>О нас</Text>
    </View>
  );
}