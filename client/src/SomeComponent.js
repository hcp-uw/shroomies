import { Text, StyleSheet } from "react-native"; // Here we are using the React Library

// By using export, you can import and use this component in your app!
export default SomeComponent = () => {
  let number = 100;

  // This is what we want the component to return.
  return (
    <Text style={styles.text}> {/* Here I am using the styles StyleSheet to change the text's color. */}
      This is a component.
      I can display data, {number}, using curly brackets!
    </Text>
  )
}

// You can style components and tags using StyleSheet
const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});