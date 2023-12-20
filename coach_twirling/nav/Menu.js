import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import { Header } from '../components/Header';

import HomeScreen from '../screens/HomeScreen';

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
            component={HomeScreen}
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
            component={HomeScreen}
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
        </Tab.Navigator>
    </NavigationContainer>
  );
}