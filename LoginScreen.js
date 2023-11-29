// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, AsyncStorage } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     checkLogin();
//   }, []);

//   const checkLogin = async () => {
//     const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//     if (isLoggedIn === '1') {
//       navigation.navigate('Dashboard');
//     }
//   };

//   const handleLogin = async () => {
//     if (username === 'admin' && password === 'password123') {
//       await AsyncStorage.setItem('isLoggedIn', '1');
//       navigation.navigate('Dashboard');
//     } else {
//       "login fail" // Handle login failure
//     }
//   };

//   return (
//     <View style = {StyleSheet.container}>
//       <TextInput value={username} onChangeText={setUsername} placeholder="Username" />
//       <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
    
//   );
// };

// const StyleSheet = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     title: {
//       fontSize: 20,
//       marginBottom: 15,
//     },
//     input: {
//       width: 50,
//       height: 40,
//       padding: 10,
//       borderWidth: 1,
//       borderColor: 'gray',
//       marginBottom: 15,
//     },
//   });
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       padding: 16,
//     },
//     input: {
//       height: 40,
//       borderColor: 'gray',
//       borderWidth: 1,
//       marginBottom: 12,
//       paddingLeft: 8,
//     },
//   });
  
// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's assume the login is successful
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});



export default LoginScreen;