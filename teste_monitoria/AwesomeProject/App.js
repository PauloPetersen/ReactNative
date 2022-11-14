import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>LORENA, EU TE AMO!</Text>
      <Text style={styles.texto2}>S2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 40

  },

  texto2: {
    color: '#ff0000',
    fontSize: 40
    

  } 
  
});
