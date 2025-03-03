import { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hello World!
      </Text>
      <Text style={styles.eventDescription}>
        Hello React!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  eventDescription: {
    color: '#6b6b6b',
    fontSize: 16,
  }
});