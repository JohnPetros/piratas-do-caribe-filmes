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

const PiratasDoCaribe2 = ({ navigation }) => {
  return (

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
            source={require('../assets/piratasdocaribe2.png')}
          />

          <View style={styles.sinopse}>
            <Text style={styles.sinopseTitle}>Sinopse:</Text>
            <Text style={styles.sinopseText}>
              Will e Elizabeth estão prestes a se casar quando o lendário pirata
              Davy Jones, comandante do invencível navio assombrado, aparece
              para cobrar uma dívida do capitão Jack Sparrow, amigo do casal. A
              única chance de Sparrow se livrar de uma maldição de Jones é
              encontrando o baú da morte.
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
  
  );
};

export default PiratasDoCaribe2;
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
