import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estatísticas</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text>Ações</Text>
          <Text>R$ 3.000,00</Text>
        </View>
        <View style={styles.stat}>
          <Text>Fundos</Text>
          <Text>R$ 2.000,00</Text>
        </View>
        <View style={styles.stat}>
          <Text>Renda Fixa</Text>
          <Text>R$ 1.000,00</Text>
        </View>
        <View style={styles.stat}>
          <Text>Previdência</Text>
          <Text>R$ 500,00</Text>
        </View>
        
        {/* Adicione mais estatísticas conforme necessário */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  stat: {
    width: '45%',
    marginBottom: 10,
  },
});
