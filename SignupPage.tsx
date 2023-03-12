import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username ,setUserName] = useState(' :')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Details', { name, email, password });
  };

  return (
    <View style={styles.container}>
      <Text>Enter Your Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="FullName"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Enter Your UserName</Text>
      <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          value={username}
          onChangeText={text=>setUserName(text)}
        />
      <Text>Enter Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text>Enter Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.signup}>
        <Text >Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#42A5F5",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding:20,
    margin:20
  },
  signup:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#42A5F5',
    width: 350,
    height: 35,

  }
})


export default SignupPage;
