import React, { useState, Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import publicIP from 'react-native-public-ip';

//hi

const HomeScreenMVP = ({ navigation }) => {
  // navigation = nav.navigation;

  let serverURL = "http://localhost:4000/identify";

  const [image, setImage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  publicIP()
  .then(ip => {
    // ip = "127.0.0.1"; works with this ip for ios simulator
    ip = "10.0.0.194"; //directly pasted in from server startup output (second ip listed)
    serverURL = "http://" + ip + ":4000/identify";
    console.log(serverURL);
  })
  .catch(error => {
    console.log(error);
    // 'Unable to get IP address.'
  });


  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        spect: [1, 1],
        quality: 1
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // sendImage(image);
        // setIsLoading(true); // new
        navigation.navigate('Results', {
          image: result.assets[0].uri,
          serverURL: serverURL,
        });
      }
    } catch (error) {
      alert("Error uploading image: " + error);
    }
  }

  const selectImage = async () => {
    console.log("select image triggered");
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        spect: [1, 1],
        quality: 1
      });

      if (!result.canceled) {
        console.log("image selected: " + result.assets[0]);
        setImage(result.assets[0].uri);
        console.log("select image is set as imageuri: " + {image});
        console.log("other: " + result.assets[0].uri)
        // sendImage(result.assets[0].uri);
        // setIsLoading(true); // new
        navigation.navigate('Results', {
          image: result.assets[0].uri,
          serverURL: serverURL,
        });
      } else {
        console.log("cancelled");
      }
    } catch (error) {
      alert("Error uploading image: " + error);
    }
  }

  // cut starting HERE

  // const sendImage = async (imageURI) => {
  //   const image = await fetchImageFromUri(imageURI);
  //   console.log(image);
  //   var reader = new FileReader();
  //   reader.onload = () => {
  //       var Data = { image:reader.result, width: reader.result.width, height: reader.result.height };
  //       var headers = {"Content-Type": "application/json"}
  //       fetch(serverURL, {
  //           method: 'POST',
  //           headers: headers,
  //           body: JSON.stringify(Data)
  //       })
  //       .then(doImageResponse)
  //       .catch((e) => {console.log(e)});
  //   }
  //   reader.readAsDataURL(image);
  //   // fetch(serverURL,
  //   //   {method: "POST",
  //   //   body: JSON.stringify({image: image}),
  //   //   headers: {"Content-Type": "application/json"}})
  //   //   .then(doImageResponse)
  //   //   .catch((e) => {console.log(e)});
  // }

  // const fetchImageFromUri = async (uri) => {
  //   const response = await fetch(uri);
  //   console.log(response.naturalWidth);
  //   const blob = await response.blob();
  //   return blob;
  // };

  // const doImageResponse = (res) => {
  //   if (res.status !== 200) {
  //     console.log(res);
  //     return;
  //   }

  //   res.json()
  //     .then(doImageResponseProcessing)
  //     .catch((e) => {console.log(e);});
  // }

  // const doImageResponseProcessing = (data) => {
  //   if (!Array.isArray(data) || data.length === 0) {
  //     console.error("bad response from /identify - not proper array")
  //     return;
  //   }
  //   setIsLoading(false);
  //   setPoisonous(data[0]);
  //   navigation.navigate('Results');
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF2E9' }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Fungi Find</Text>
        </View>
        <View style={styles.hr} />
        <Text style={styles.subtitle}>Is my mushroom poisonous?</Text>
        <Text style={styles.subtitle}>Scan it now to find out!</Text>
        <View style={styles.horizIconContainer}>
          <Image
            source={require('../assets/camera-fungifind.png')}
            style={styles.rotatedIcon15}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/shroomies_icon.png')}
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={uploadImage}
          style={styles.button1}>
          <Text style={styles.buttonText}>Scan Mushroom</Text>
          <Image
            source={require('../assets/camera.png')}
            style={styles.camera}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={selectImage}
          style={styles.button}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('AboutPage')}
          // onPress={() => navigation.navigate('Results')}
          style={styles.aboutButton}>
          <Text style={styles.aboutButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 140,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 33,
    lineHeight: 40,
    textAlign: 'left',
    color: '#772F1A',
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 10
  },
  about: {
    width: 25,
    height: 25,
  },
  subtitle: {
    fontSize: 21,
    lineHeight: 26,
    textAlign: 'left',
    color: '#772F1A',
  },
  iconContainer: {
    marginRight: 10,
  },
  horizIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginLeft: -40,
    marginRight: 40,
    marginTop: 8,
  },
  rotatedIcon15: {
    transform: [{ rotate: '13.38deg'}],
    width: 240,
    height: 190,
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: '#B55710',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 30,
    borderColor: '#585123',
    borderWidth: 5,
  },
  button1: {
    width: 330,
    height: 190,
    backgroundColor: '#B55710',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 30,
    borderColor: '#585123',
    borderWidth: 5,
    gap: 10,
  },
  aboutButton: {
    width: 330,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#585123',
    borderWidth: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'left',
    color: '#ffff',
  },
  aboutButtonText: {
    fontSize: 18,
    textAlign: 'left',
    color: '#585123',
    fontWeight: 'bold',
  },
  camera: {
    width: 60,
    height: 50
  }
});

export default HomeScreenMVP;

export const isRecord = (val) => {
  return val !== null && typeof val === "object";
};