import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

import { Header } from '../components/Header';

import HomeScreen from '../screens/HomeScreen';
import TechnicalScreen from '../screens/TechnicalScreen';
import MusicScreen from '../screens/MusicScreen';
import LevelScreen from '../screens/LevelScreen';
import ElementScreen from '../screens/ElementScreen';
import VariationScreen from '../screens/VariationScreen';
import AthleteScreen from '../screens/AthleteScreen';


import NewGroupElementScreen from '../screens/NewGroupElementScreen';
import NewAthleteScreen from '../screens/NewAthleteScreen';
import NewLevelScreen from '../screens/NewLevelScreen';
import NewElementScreen from '../screens/NewElementScreen';
import NewVariationScreen from '../screens/NewVariationScreen';

export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            header: (props) => <Header {...props}/>, 
            tabBarStyle: {
                height: 90,
                paddingTop: 0,
                backgroundColor: '#6d639f',
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
                 tabBarIcon: () => (
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={require("../assets/home.png")}/>
                 )
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
                tabBarIcon: () => (
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../assets/technic.png")}/>
                )
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
                 tabBarIcon: () => (
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={require("../assets/music.png")}/>
                 )
            }} 
        />

        <Tab.Screen
            name="Entrainement" 
            component={MusicScreen}
            options={{ 
                tabBarLabel: 'Entrainement',
                tabBarOptions: { 
                    showIcon: true 
                 },
                 tabBarIcon: () => (
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={require("../assets/list.png")}/>
                 )
            }} 
        />
        
        <Tab.Screen
            name="Athletes" 
            component={AthleteScreen}
            options={{ 
                tabBarLabel: 'Athlètes',
                tabBarOptions: { 
                    showIcon: true 
                 },
                 tabBarIcon: () => (
                     <Image
                         style={{ width: 50, height: 50 }}
                         source={require("../assets/athletes.png")}/>
                 )
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
        
        <Tab.Screen
            name="NewGroupElement" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <NewGroupElementScreen {...props}/>}
        </Tab.Screen>

        <Tab.Screen
            name="NewLevel" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <NewLevelScreen {...props}/>}
        </Tab.Screen>

        <Tab.Screen
            name="NewElement" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <NewElementScreen {...props}/>}
        </Tab.Screen>

        <Tab.Screen
            name="NewVariation" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <NewVariationScreen {...props}/>}
        </Tab.Screen>
        
        <Tab.Screen
            name="NewAthlete" 
            options={{
                tabBarButton: (props) => null,
            }}>
                {(props) => <NewAthleteScreen {...props}/>}
        </Tab.Screen>

        </Tab.Navigator>
    </NavigationContainer>
  );
}