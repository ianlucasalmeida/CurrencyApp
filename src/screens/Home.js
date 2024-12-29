import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Balance from '../components/Balance';
import Statistics from '../components/Statistics';

export default function Inicio() {
  return (
    <ScrollView style={styles.container}>
      <Balance />
      <Statistics />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
});
