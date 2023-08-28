import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WishListScreen from '../../containers/WishListScreen';

const Stack = createNativeStackNavigator();

const WishListStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='WishListScreen' component={WishListScreen} />
        </Stack.Navigator>
    );
}

export default WishListStackNavigator