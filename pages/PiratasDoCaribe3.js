import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const PiratasDoCaribe3 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <ScrollView
        style={{
         backgroundColor: '#222',
        }}>
        <View
           style={{
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          <Image
            style={styles.image}
            source={require('../assets/piratasdocaribe3.png')}
          />

          <View style={styles.sinopse}>
            <Text style={styles.sinopseTitle}>Sinopse:</Text>
            <Text style={styles.sinopseText}>
              Will Turner e Elizabeth Swann unem forças com o Capitão Barbossa
              para libertarem Jack Sparrow da prisão de Davy Jones. Enquanto
              isso, a tripulação do barco fantasma O Holandês Voador causa
              estragos nos Sete Mares. Os amigos devem navegar através de águas
              perigosas para enfrentarem o pirata chinês São Feng e, finalmente,
              eles devem escolher em que lado ficar na batalha, pois a vida do
              pirata está em jogo.
            </Text>
          </View>
        </View>

       <View style={{justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'gold', fontSize: 18 }}>Voltar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PiratasDoCaribe3;
const styles = StyleSheet.create({
  image: {
    width: '95%',
    height: 380,
    marginTop: 10,
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#850713',
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 10


  },

  sinopse: {
     borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#850713',
    padding: 12,
    marginTop: 18,
    borderRadius: 15,
  },

  sinopseTitle: {
    color: 'gold',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
  },

  sinopseText: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 16,

  },
});
