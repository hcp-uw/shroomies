import React, { useState, Component, Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
//hi

const HomeScreenMVP = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [image, setImage] = useState(null);
  const serverURL = "../server/identify";

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
        sendImage(image);
      }
    } catch (error) {
      alert("Error uploading image: " + error);
    }
  }

  const selectImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        spect: [1, 1],
        quality: 1
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        sendImage(image);
      }
    } catch (error) {
      alert("Error uploading image: " + error);
    }
  }

  const sendImage = async (imageURI) => {
    fetch(serverURL, {method: "POST", body: JSON.stringify(imageURI)})
      .then((result) => console.log(JSON.stringify(result)))
      .catch((result) => {console.log("could not connect to server");});
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#EE9E62' }}/>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#576F3D' }}>
        <LinearGradient
          colors={['#EE9E62', '#576F3D']}
          style={styles.gradient}
        >
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Fungi Find</Text>
              <TouchableOpacity
              onPress={() => navigation.navigate('AboutPage')}>
              <Image
                source={require('../assets/aboutus-icon.png')}
                style={styles.about}
              />
            </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Scan your mushroom to identify!</Text>
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
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={selectImage}
              style={styles.button}>
              <Text style={styles.buttonText}>Select Image</Text>
            </TouchableOpacity>
          </View>

        </LinearGradient>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#772F1A',
    fontFamily: "Lato",
  },
  about: {
    width: 25,
    height: 25,
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 16,
    color: '#46583D',
    fontWeight: 'bold',
    fontFamily: "Lato",
  },
  iconContainer: {
    marginRight: 10,
  },
  horizIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
  icon: {
    width: 150,
    height: 150,
    marginLeft: -40,
    marginRight: 40,
    marginTop: 10,
  },
  rotatedIcon15: {
    transform: [{ rotate: '13.38deg'}],
    width: 260,
    height: 200,
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
    // backgroundColor: 'black',
  },
  button: {
    flex: 1,
    width: 225,
    height: 50,
    backgroundColor: '#585123',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 70,
    marginHorizontal: 30,
  },
  button1: {
    flex: 1,
    width: 225,
    height: 150,
    backgroundColor: '#585123',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 16,
    color: '#ffff',
    fontWeight: 'bold',
  },
  camera: {
    width: 60,
    height: 50
  }
});

export default HomeScreenMVP;
