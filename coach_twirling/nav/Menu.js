import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

import { Header } from '../components/Header';

import HomeScreen from '../screens/HomeScreen';
import TechnicalScreen from '../screens/TechnicalScreen';
import MusicScreen from '../screens/MusicScreen';
import LevelScreen from '../screens/LevelScreen';
import ElementScreen from '../screens/ElementScreen';
import VariationScreen from '../screens/VariationScreen';

export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            headerTitle: (props) => <Header {...props}/>,
            headerStyle: {
                backgroundColor: "#6610f2"
              },
            tabBarStyle: {
                height: 90,
                paddingTop: 0,
                backgroundColor: 'rgba(34,36,40,1)',
                position: 'absolute',
                borderTopWidth: 0,
            },
          }}>
        <Tab.Screen
            name="Accueil" 
            component={HomeScreen}
            options={{ 
                tabBarLabel: 'Accueil',
                tabBarOptions: { 
                    showIcon: true 
                 },
                 tabBarIcon: () => {
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}/>
                 }
            }} 
        />

        <Tab.Screen
            name="Technique" 
            component={TechnicalScreen}
            options={{ 
                tabBarLabel: 'Technique',
                tabBarOptions: { 
                    showIcon: true 
                 },
                tabBarIcon: () => {
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}/>
                }
            }} 
        />

        <Tab.Screen
            name="Musique" 
            component={MusicScreen}
            options={{ 
                tabBarLabel: 'Musique',
                tabBarOptions: { 
                    showIcon: true 
                 },
                 tabBarIcon: () => {
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}/>
                 }
            }} 
        />

        <Tab.Screen
            name="Levels" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <LevelScreen {...props}/>}
        </Tab.Screen>

        <Tab.Screen
            name="Elements" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <ElementScreen {...props}/>}
        </Tab.Screen>
        
        <Tab.Screen
            name="Variations" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <VariationScreen {...props}/>}
        </Tab.Screen>

        </Tab.Navigator>
    </NavigationContainer>
  );
}