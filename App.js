import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import PiratasDoCaribe1 from './pages/PiratasDoCaribe1';
import PiratasDoCaribe2 from './pages/PiratasDoCaribe2';
import PiratasDoCaribe3 from './pages/PiratasDoCaribe3';
import PiratasDoCaribe4 from './pages/PiratasDoCaribe4';
import PiratasDoCaribe5 from './pages/PiratasDoCaribe5';

const Stack = createStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Home"
        screenOptions = {{
          headerStyle: { backgroundColor: '#850713' },
          headerTintColor: '#eee',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
       <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Piratas do Caribe - Home' }}
        />
         <Stack.Screen
          name="PiratasDoCaribe1"
          component={PiratasDoCaribe1}
          options={{ title: 'A Maldição do Pérola Negra' }}
        />
          <Stack.Screen
          name="PiratasDoCaribe2"
          component={PiratasDoCaribe2}
          options={{ title: 'O Baú da Morte' }}
        />
          <Stack.Screen
          name="PiratasDoCaribe3"
          component={PiratasDoCaribe3}
          options={{ title: 'No Fim do Mundo' }}
        />
           <Stack.Screen
          name="PiratasDoCaribe4"
          component={PiratasDoCaribe4}
          options={{ title: 'Navegando em Águas Misteriosas' }}
        />
          <Stack.Screen
          name="PiratasDoCaribe5"
          component={PiratasDoCaribe5}
          options={{ title: 'A Vingança de Salazar' }}
        />
        
      </Stack.Navigator>
   </NavigationContainer>
  );
}


