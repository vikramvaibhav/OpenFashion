import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShoppingBag from '../assets/icons/ShoppingBag.svg';
import Heart from '../assets/icons/Heart.svg';
import Gallery from '../assets/icons/Gallery.svg';
import Home from '../assets/icons/Home.svg';

import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import CollectionStackNavigator from './stack-navigators/CollectionStackNavigator';
import WishListStackNavigator from './stack-navigators/WishListStackNavigator';
import CartStackNavigator from './stack-navigators/CartStackNavigator';

const Tab = createBottomTabNavigator();

// Bottom Tab
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeStack" component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Home height={focused ? 35 : 24} width={focused ? 35 : 24} />
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen name="CollectionStack" component={CollectionStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Gallery height={focused ? 35 : 24} width={focused ? 35 : 24} />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen name="WishListStack" component={WishListStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Heart height={focused ? 35 : 24} width={focused ? 35 : 24} />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen name="CartStack" component={CartStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ShoppingBag height={focused ? 35 : 24} width={focused ? 35 : 24} />
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;