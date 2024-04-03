import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Results = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF2E9' }}>
      <View style={styles.headingContainer}>
        <Image
          source={require('../assets/arrow-fungifind.png')}
          style={styles.arrow}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
  },
  arrow: {
    transform: [{ rotate: '180deg'}],
  }
})

export default Results;