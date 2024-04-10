import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AboutPageMVP = ({ navigation }) => {
  const teamMembers = [
    { name: 'Paulina Teran', role: 'Project Manager, Front End Developer', image: require('../assets/pfps/paulina.png') },
    { name: 'Connor Sun', role: 'Front End Developer', image: require('../assets/pfps/connor.png') },
    { name: 'Aarfan Hussain', role: 'Front End Developer', image: require('../assets/pfps/aarfan.png') },
    { name: 'Angie Wu', role: 'Back End Developer', image: require('../assets/pfps/angie.png') },
    { name: 'Alex Situ', role: 'Back End Developer', image: require('../assets/pfps/alex.png') },
    { name: 'James Parrott', role: ' Back End Developer', image: require('../assets/pfps/james.png') },
    { name: 'Joseph Lee', role: 'Back End Developer', image: require('../assets/pfps/aarfan.png') },
    { name: 'Sophie Koehler', role: 'Back End Developer', image: require('../assets/pfps/aarfan.png') },
  ];

  // Component to display each team member
  const TeamMemberComponent = ({ name, role, image }) => {
    // Splitting the role string into an array of roles
    const rolesArray = role.split(', ');

    return (
      <View style={styles.memberContainer}>
        <Image source={image} style={styles.icon} />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{name}</Text>
          {/* Mapping through each role to display them individually */}
          {rolesArray.map((role, index) => (
            <Text key={index} style={styles.memberRole}>{role}</Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/shroomies_icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {teamMembers.map((member, index) => (
          <TeamMemberComponent key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
    paddingBottom: 34,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  memberInfo: {
    marginLeft: 10,
  },
  memberName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center', 

  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  button: {
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
    color: '#585123',
    fontWeight: 'bold',
  },
});

export default AboutPageMVP;
