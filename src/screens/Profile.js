import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([
    { id: '1', description: 'Compra no Supermercado', amount: '-$50.00', date: '2024-01-01' },
    { id: '2', description: 'Salário', amount: '$1500.00', date: '2024-01-05' },
    { id: '3', description: 'Venda de item', amount: '$200.00', date: '2024-01-10' },
  ]);

  const handleSave = () => {
    // Logic to save profile information
    console.log('Profile saved', { name, email, balance });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Saldo"
        value={balance}
        onChangeText={setBalance}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSave} />
      
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transações Recentes</Text>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  editButton: {
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  transactionContainer: {
    marginTop: 32,
  },
  transactionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  transactionItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  transactionDescription: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
});
