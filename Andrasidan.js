import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';




export default function Andrasidan({navigation}) {



  return (
<View style={styles.Bakgrund}>
    <Text style={styles.Storlek}> Hejsan där</Text>
   
</View>
 
  );
}

const styles = StyleSheet.create({
    Storlek: {
      fontSize: 100,
      color: '#ffffff'
    },
    Bakgrund: {
        backgroundColor: '#0000ff',
        flex: 1,
        
    }
});
