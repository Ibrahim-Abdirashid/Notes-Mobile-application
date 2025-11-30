import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Notes' }} />
        <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Note Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}