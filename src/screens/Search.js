import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = 'YOUR_API_KEY_HERE'; // Substitua pela sua chave de API da Alpha Vantage

export default function Profile() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const bestMatches = response.data.bestMatches;
      if (bestMatches) {
        const detailedResults = await Promise.all(
          bestMatches.map(async (match) => {
            const symbol = match['1. symbol'];
            const quoteResponse = await axios.get(
              `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
            );
            const globalQuote = quoteResponse.data['Global Quote'];
            return {
              symbol: symbol,
              name: match['2. name'],
              price: globalQuote['05. price'],
              change: globalQuote['09. change'],
              changePercent: globalQuote['10. change percent'],
            };
          })
        );
        setResults(detailedResults);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for stocks or currencies"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultText}>
                {item.name} ({item.symbol})
              </Text>
              <Text style={styles.resultText}>Price: ${item.price}</Text>
              <Text style={styles.resultText}>Change: {item.change}</Text>
              <Text style={styles.resultText}>Change Percent: {item.changePercent}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resultItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  resultText: {
    fontSize: 16,
  },
});
