// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add your login logic here
//     console.log('Logging in...');
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.header}>Login</Text> */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '50%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 16,
    
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });


// const App = () => {
//   return (
    
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput style={styles.input} placeholder="Username" />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry />
//       <Button title="Login" onPress={() => { const handleLogin = (username, password) => {
//   if (username === 'admin' && password === 'password123') {
//     // Login successful
//   } else {
//     // Login failed
//   }
// }; }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 15,
//   },
//   input: {
//     width: 100,
//     height: 40,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 15,
//   },
// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;