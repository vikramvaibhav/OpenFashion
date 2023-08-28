import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../containers/HomeScreen';
import BlogListScreen from '../../containers/BlogListScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <View style={{ flex: 1 }} collapsable={false}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='BlogListScreen' component={BlogListScreen} />
            </Stack.Navigator>
        </View>
    );
}

export default HomeStackNavigator