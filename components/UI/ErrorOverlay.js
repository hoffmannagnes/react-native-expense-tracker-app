import { View, Text, StyleSheet, Button } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.constainer}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title='okay'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default ErrorOverlay;
