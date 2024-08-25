import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';

const Results = ({ navigation, route }) => {
  // navigation = nav.navigation;
  // var mushroom = this.props.active
  //   ? require(imag)

  const{ image, serverURL } = route.params;
  console.log("server passed: " + serverURL);
  console.log("image passed: " + image);

  const [poisonous, setPoisonous] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sendImage = async (imageURI) => {
    console.log("send image triggered");
    const imagedata = await fetchImageFromUri(imageURI);
    console.log("fetched image data: " + imagedata);
    console.log("server url: " + serverURL);
    var reader = new FileReader();
    reader.onload = () => {
        var Data = { imagedata:reader.result, width: reader.result.width, height: reader.result.height };
        var headers = {"Content-Type": "application/json"}
        fetch(serverURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
        })
        .then(doImageResponse)
        .catch((e) => {console.log("send image error: " + e)});
    }
    reader.readAsDataURL(imagedata);
    // fetch(serverURL,
    //   {method: "POST",
    //   body: JSON.stringify({image: image}),
    //   headers: {"Content-Type": "application/json"}})
    //   .then(doImageResponse)
    //   .catch((e) => {console.log(e)});
  }

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    console.log("fetchImageURI response natural width: " + response.naturalWidth);
    const blob = await response.blob();
    return blob;
  };

  const doImageResponse = (res) => {
    if (res.status !== 200) {
      console.log("image response result: " + res);
      return;
    }

    res.json()
      .then(doImageResponseProcessing)
      .catch((e) => {console.log(e);});
  }

  const doImageResponseProcessing = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      console.error("bad response from /identify - not proper array")
      return;
    }
    setPoisonous(data[0]);
    setIsLoading(false);
    console.log(isLoading + ", " + poisonous);
  }

  try {
    sendImage(image);
  } catch (error) {
    alert("Error sending image: " + error);
  }

  while (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#772F1A" />
      </View>
    );
  }
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
            source={
              poisonous[3]>2*Math.pow(10, -8) ?
              require('../assets/shroomies-x.png') :
              require('../assets/shroomies-check.png')}
            style={styles.resultsImage}
          />
          <Text style={styles.resultsText}>{poisonous[3]>2*Math.pow(10, -8)? <Text>Poisonous</Text> : <Text>Not Poisonous</Text>}</Text>
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