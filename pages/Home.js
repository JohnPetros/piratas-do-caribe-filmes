import * as React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 2 }}>
        <ScrollView style={{padding: 15, backgroundColor: "#222"}}>
          <View
            style={{
             justifyContent: 'center',
             alignItems: 'center',
            }}>
            <Image style={styles.logo} source={require('../assets/logo-app.jpg')} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                textShadowColor: '#850713',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 1,
                color: 'gold',
                marginTop: 10,
                marginBottom: 10,
              }}>
              Saiba mais sobre os 5 filmes dos Piratas do Caribe
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PiratasDoCaribe1')}>
              <Text style={styles.textButton}>
                Piratas do Caribe: {"\n"} A Maldição do Pérola Negra
              </Text>
            </TouchableOpacity>
             <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PiratasDoCaribe2')}>
              <Text style={styles.textButton}>
                Piratas do Caribe: {"\n"} O Baú da Morte
              </Text>
            </TouchableOpacity>
             <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PiratasDoCaribe3')}>
              <Text style={styles.textButton}>
                Piratas do Caribe: {"\n"} No Fim do Mundo
              </Text>
            </TouchableOpacity>
             <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PiratasDoCaribe4')}>
              <Text style={styles.textButton}>
                Piratas do Caribe: {"\n"} Navegando em Águas Misteriosas 
              </Text>
            </TouchableOpacity>
              <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PiratasDoCaribe5')}>
              <Text style={styles.textButton}>
                Piratas do Caribe: {"\n"} A Vingança de Salazar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 160,
    borderRadius: 75,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#850713',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: 250,
    marginTop: 12,
    marginBottom: 10,
    borderRadius: 15,
  },
  textButton: {
    textAlign: 'center', fontSize: 18, color: '#eee', fontWeight: 'bolder',
  }
});
