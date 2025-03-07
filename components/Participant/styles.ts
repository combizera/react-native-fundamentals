import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363746',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 0,
    marginBottom: 10,
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#e23c44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 16,
  },
});