// // In DashboardScreen.js
// import React from 'react';
// import { View, Text, Button, AsyncStorage } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const DashboardScreen = () => {
//   const navigation = useNavigation();

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('isLoggedIn');
//     navigation.navigate('Login');
//   };

//   return (
//     <View>
//       <Text>Dashboard</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add your logout logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;