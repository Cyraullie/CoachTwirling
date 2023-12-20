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
          }}>
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Technique" component={HomeScreen} />
        <Tab.Screen name="Musique" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}