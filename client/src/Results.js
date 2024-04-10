import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const Results = ({nav, poisonous, image}) => {
  navigation = nav.navigation;
  // var mushroom = this.props.active
  //   ? require(imag)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF2E9' }}>
      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../assets/arrow-fungifind.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/shroomies-x.png')}
          style={styles.resultsImage}
        />
        <Text style={styles.resultsText}>{poisonous[3]>0.5? <Text>Poisonous</Text> : <Text>Not Poisonous</Text>}</Text>
        <Text style={styles.disclaimer}>
          Disclaimer: This app is developed by students for educational and recreational purposes.
          Users must assume responsibility for actions taken related to mushroom identification, such
          as consumption and other associated risks.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: 16
  },
  arrow: {
    transform: [{ rotate: '180deg'}],
    width: 40,
    height: 40,
  },
  imageContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'pink',
    marginBottom: 10
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30
  },
  resultsImage: {
    width: 125,
    height: 125
  },
  resultsText: {
    fontWeight: 'bold',
    fontSize: 33,
    lineHeight: 40,
    color: '#772F1A',
  },
  disclaimer: {
    fontSize: 16,
    lineHeight: 20,
    color: '#772F1A',
    marginTop: 15
  }
})

export default Results;