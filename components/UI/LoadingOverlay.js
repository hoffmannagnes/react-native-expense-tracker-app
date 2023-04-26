import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const LoadingOverlay = () => {
  return (
    <View style={styles.constainer}>
      <ActivityIndicator size='large' color='white' />
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
  }
});

export default LoadingOverlay;
