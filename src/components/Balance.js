import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Balance() {
  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Saldo Atual</Text>
      <Text style={styles.balanceAmount}>R$ 12.345,67</Text>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar" onPress={() => {}} />
        <Button title="Retirar" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
