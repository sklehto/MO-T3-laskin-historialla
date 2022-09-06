import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]); // Tallennetaan listalle laskimen käytön historia.

  const plusButtonPressed = () => {
    const sum = Number(number1) + Number(number2); 
    // console.log([...history, {key: number1 + " + " + number2 + " = " + sum} ]);
    setResult(sum);
    setHistory([...history, {key: Number(number1) + " + " + Number(number2) + " = " + sum} ]);
  };

  const minusButtonPressed = () => {
    const subtraction = Number(number1) - Number(number2); 
    // console.log([...history, {key: number1 + " - " + number2 + " = " + subtraction} ]);
    setResult(subtraction);
    setHistory([...history, {key: Number(number1) + " - " + Number(number2) + " = " + subtraction} ]);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={number => setNumber1(number)}
        value={number1}
      />
      <TextInput
        style={{width: 200, borderColor: 'grey', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={number => setNumber2(number)}
        value={number2}
      />
      <View style={styles.button}>
        <Button onPress={plusButtonPressed} title="+" />
        <Button onPress={minusButtonPressed} title="-" />
      </View>
      <Text>History: </Text>
        <FlatList
          data = {history}
          renderItem = { ({item}) => <Text>{item.key}</Text> }
          keyExtractor = { (item, index) => index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 90,
    paddingTop: 25,
    paddingBottom: 25,
  },
})