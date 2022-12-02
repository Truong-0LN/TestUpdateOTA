import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import codePush from 'react-native-code-push';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
    </View>
  );
};

export default codePush(App);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: '#02a',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
