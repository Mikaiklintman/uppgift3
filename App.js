import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Förstasidan from './Förstasidan';
import Andrasidan from './Andrasidan';

const stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <stack.Navigator>

      <stack.Screen name='Hejsan' component={Förstasidan} />
      <stack.Screen name='Andrasidan' component={Andrasidan} />



      </stack.Navigator>



    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
