import React, { useState, Component, Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AboutPageMVP = ({navigation}) => {

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
                onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                  source={require('../assets/aboutus-icon.png')}
                  style={styles.about}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.horizIconContainer}>
              <Image
                source={require('../assets/shroomies_icon.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.aboutText}> Disclaimer disclaimer I do declare Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. At varius vel pharetra vel turpis nunc eget lorem. Congue eu consequat ac felis donec et. Eget aliquet nibh praesent tristique magna. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Ut consequat semper viverra nam libero justo laoreet sit. Viverra suspendisse potenti nullam ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Volutpat maecenas volutpat blandit aliquam etiam erat. {"\n"}Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Gravida cum sociis natoque penatibus et magnis dis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Eu non diam phasellus vestibulum lorem sed risus ultricies. Felis bibendum ut tristique et egestas quis. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Nunc vel risus commodo viverra maecenas accumsan. Egestas quis ipsum suspendisse ultrices. Dignissim diam quis enim lobortis scelerisque fermentum. Pharetra vel turpis nunc eget. Sit amet est placerat in egestas. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tellus in metus vulputate eu. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Id donec ultrices tincidunt arcu non. Consequat semper viverra nam libero. Ultrices eros in cursus turpis massa tincidunt dui ut. Dictumst quisque sagittis purus sit amet volutpat consequat. Quam pellentesque nec nam aliquam sem. </Text>
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
    flex: 1,
  },
  about: {
    width: 25,
    height: 25,
  },
  aboutText: {
    fontSize: 30,
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
    margin: 25,
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: 10,
    alignItems: 'center',
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
    width: 25,
    height: 25,
    justifyContent: 'right',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    marginHorizontal: 50,
  },
  button1: {
    flex: 1,
    width: 225,
    height: 150,
    backgroundColor: '#585123',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    marginHorizontal: 50,
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

export default AboutPageMVP;
