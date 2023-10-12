import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';


const data = [
    {id: '1', name: 'Apelsinjuice'},
    {id: '2', name: 'Banansmoothie'},
    {id: '3', name: 'Cider'},
];

export default function Förstasidan({navigation}) {



  return (

    <SafeAreaView>
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}> {item.name} </Text>
                {item.name === 'Cider' && (
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Andrasidan')
                    }}
                >
                    <Text style={styles.ReadMore}>Läs mer </Text>
                </TouchableOpacity>
                )}
            </View>
        )}
        />
    </SafeAreaView>





   
      

  );
};

 
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      padding: 20,
    },
    itemText: {
      fontSize: 30,
    },
    ReadMoreContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    ReadMoreText: {
      fontSize: 50,
      color: 'white',
    },
    ReadMore: {
      color: 'blue',
      marginTop: 10,
    },
  });
