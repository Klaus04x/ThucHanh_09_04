import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  terms: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 30,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  link: {
    color: '#28a745',
    fontWeight: 'bold',
  },
});

export default styles;