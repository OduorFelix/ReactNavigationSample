import React, {useEffect} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


function CustomHeader ({title}) {
      return (
        <View style={ { flexDirection: 'row', height: 50 } }>
          {/* Left Icon */}
          <TouchableOpacity
            style={{
              width: 50,
              paddingLeft: 20,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/assets/images/menu.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          {/* Middle Content */}
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                width: '70%',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <Text>{ title }</Text>
            </View>
          </View>
          {/* Right Icon */}
          <TouchableOpacity
            style={{
              width: 50,
              paddingRight: 20,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/assets/images/user.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => navigation.navigate('Details')}>
          <Text>Go to Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetails() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home Details" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Details!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Settings" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => navigation.navigate('SettingsDetails')}>
          <Text>Go to Account Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenAccount() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Account Settings" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Account Settings!</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack () {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={HomeScreenDetails} />
    </Stack.Navigator>
  );
}

function SettingStack () {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SettingsDetails" component={SettingsScreenAccount} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
