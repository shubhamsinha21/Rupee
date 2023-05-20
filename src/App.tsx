import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import { currencyByRupee } from './constant';
import CurrencyButton from './components/currencyButton';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#bb79d4',
        textColor: 'red',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#bb79d4',
        textColor: 'red',
      });
    }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.Container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter amount in Rupees"
              keyboardType="number-pad"
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && <Text style={styles.resultText}>{resultValue}</Text>}
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={2}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected,
                  ]}
                  onPress={() => buttonPressed(item)}>
                  <CurrencyButton {...item} />
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#d66ee6',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultText: {
    fontSize: 32,
    color: 'yellow',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  bottomContainer: {
    flex: 2,
    padding:10
  },
  button: {
    flex: 1,
    margin: 12,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'yellow',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    
  },

  selected: {
    backgroundColor: '#ffeaa7',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
});

export default App;
