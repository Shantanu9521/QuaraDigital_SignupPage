import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Details = ({ route }) => {
  const { name,username ,email, password } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>UserName: {username}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Password: {password}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    height: "30%",
    width: "98%",
    borderWidth: 5,
    borderColor: "#42A5F5",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 22,
  },
});

export default Details;
