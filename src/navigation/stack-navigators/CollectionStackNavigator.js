import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CollectionScreen from '../../containers/CollectionScreen';

const Stack = createNativeStackNavigator();

const CollectionStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CollectionScreen' component={CollectionScreen} />
        </Stack.Navigator>
    );
}

export default CollectionStackNavigator