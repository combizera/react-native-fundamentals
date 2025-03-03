import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  },
  input: {
    height: 56,
    backgroundColor: '#1d1e25',
    borderRadius: 8,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: 56,
    height: 56,
    backgroundColor: '#31cf67',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 16,
  }
});