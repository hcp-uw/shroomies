import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const AboutPageMVP = ({ navigation }) => {
  const teamMembers = [
    { name: 'Paulina Teran', role: 'Project Manager, Front End Developer', image: require('../assets/pfps/paulina.png') },
    { name: 'Connor Sun', role: 'Front End Developer', image: require('../assets/pfps/connor.png') },
    { name: 'Aarfan Hussain', role: 'Front End Developer', image: require('../assets/pfps/aarfan.png') },
    { name: 'James Parrott', role: ' Back End Lead', image: require('../assets/pfps/james.png') },
    { name: 'Angie Wu', role: 'Back End Developer', image: require('../assets/pfps/angie.png') },
    { name: 'Alex Situ', role: 'Back End Developer', image: require('../assets/pfps/alex.png') },
    // { name: 'Joseph Lee', role: 'Back End Developer', image: require('../assets/pfps/aarfan.png') },
    // { name: 'Sophie Koehler', role: 'Back End Developer', image: require('../assets/pfps/aarfan.png') },
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF2E9' }}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image
              source={require('../assets/arrow-fungifind.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/shroomies_icon.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.aboutUsInfo}>
              We, also known as Team Shroomies, are a group of students at the University of Washington
              looking to further our learning by making a mushroom identification app.
            </Text>
          </View>
          <View style={styles.memberListContainer}>
            {teamMembers.map((member, index) => (
              <TeamMemberComponent key={index} name={member.name} role={member.role} image={member.image} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  arrow: {
    transform: [{ rotate: '180deg'}],
    width: 40,
    height: 40,
  },
  textContainer: {
    paddingHorizontal: 25
  },
  title: {
    fontSize: 33,
    lineHeight: 40,
    color: '#772F1A',
    marginBottom: 5
  },
  aboutUsInfo: {
    fontSize: 16,
    lineHeight: 20,
    color: '#772F1A',
    marginBottom: 10
  },
  memberListContainer: {
    alignItems: 'center',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 15
  },
  memberInfo: {
    width: 160
  },
  memberName: {
    fontSize: 21,
    lineHeight: 26,
    color: '#772F1A',
    fontWeight: 'bold'
  },
  memberRole: {
    fontSize: 14,
    lineHeight: 19,
    color: '#A06A58',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default AboutPageMVP;
