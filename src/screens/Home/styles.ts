import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#686868',
    fontSize: 16
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    height: 56,
    color: '#fff',
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  }
});