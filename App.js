import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Code from './src/screen/Code';
import Messages from './src/screen/Messages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          title:'Telefon Numarası'
        }} />
          <Stack.Screen name="Code" component={Code} options={{
            headerBackTitle:"Geri",
          title:'Doğrulama Kodu'
        }} />
         <Stack.Screen name="Messages" component={Messages} options={{
          title:'Mesajlar'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;