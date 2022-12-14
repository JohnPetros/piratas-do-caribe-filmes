import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const PiratasDoCaribe1 = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#222',
        flex: 1,
       
      }}>
      <View
        style={{
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={styles.image}
          source={require('../assets/piratasdocaribe1.png')}
        />

        <View style={styles.sinopse}>
          <Text style={styles.sinopseTitle}>Sinopse:</Text>
          <Text style={styles.sinopseText}>
            O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão
            Barbossa e sua tripulação. Com o navio de Sparrow, Barbossa invade a
            cidade de Port Royal, levando consigo Elizabeth Swann, filha do
            governador. Para recuperar sua embarcação, Sparrow recebe a ajuda de
            Will Turner, um grande amigo de Elizabeth. 
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

export default PiratasDoCaribe1;
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
