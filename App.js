import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Login from "./screens/login"
import signUpScreen from "./screens/signUpScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <signUpScreen/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Login: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen }
},

{
  defaultNavigationOptions:({navigation}) =>({
    tabBarIcon:() =>{
      const routeName=navigation.state.routeName
      console.log(routeName)

      if(routeName === "login"){
        return(
          <Image 
          source={require('./assets/login.png')}
          style={{width:40,height:40}}
          />
        )
      }
      else if(routeName === "signUp"){
       return(
         <Image 
         source={require('./assets/signUp.webp')}
         style={{width:40,height:40}}
         />
       )
      }
    }
  })
}
);

const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
