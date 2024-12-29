import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FlatList } from 'react-native';

export default function Wallet() {
  const [balance, setBalance] = useState(1649.25);

  const transactions = [
    { id: '1', description: 'Compra no supermercado', amount: -50.75 },
    { id: '2', description: 'Salário', amount: 1500.00 },
    { id: '3', description: 'Transferência recebida', amount: 200.00 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carteira</Text>
      <Text style={styles.balance}>Saldo: R$ {balance.toFixed(2)}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.description}</Text>
            <Text style={item.amount < 0 ? styles.negative : styles.positive}>
              R$ {item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
      <Button title="Adicionar Transação" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});
