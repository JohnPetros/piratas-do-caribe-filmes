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

const PiratasDoCaribe5 = ({ navigation }) => {
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
            source={require('../assets/piratasdocaribe5.png')}
          />

          <View style={styles.sinopse}>
            <Text style={styles.sinopseTitle}>Sinopse:</Text>
            <Text style={styles.sinopseText}>
              O passado do capitão Jack Sparrow volta a alcançá-lo quando ele
              cruza com Angelica, uma bonita pirata que Jack, um dia, amou e
              depois abandonou. Ela, então, o força a acompanhá-la ao navio
              Vingança da Rainha Ana, do famoso Barba Negra. Junto com uma
              tripulação de zumbis, o trio parte em busca da lendária Fonte da
              Juventude. Mas o rival de Jack, Barbossa, também cobiça a fonte,
              assim como um navio espanhol.
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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

export default PiratasDoCaribe5;
const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 380,
    marginTop: 10,
    borderRadius: 10,
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
    marginTop: 15,
  },

  sinopse: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#850713',
    padding: 12,
    marginTop: 20,
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
