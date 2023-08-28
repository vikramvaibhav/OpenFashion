import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BottomTabNavigator from "./BottomTabNavigator";
import BlogListScreen from "../containers/BlogListScreen/BlogListScreen";

import Menu from '../assets/icons/Menu.svg';
import Logo from '../assets/images/Logo.svg';
import Search from '../assets/icons/Search.svg';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    height: wp(15),
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
                        <Menu height={24} width={24} />
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen name="HomeTabs" component={BottomTabNavigator}
                options={{
                    title: 'Home',
                    headerTitle: () => <Logo height={30} width={78} />,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }} style={styles.headerRight}>
                            <Search height={24} width={24} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Drawer.Screen name="Blog" component={BlogListScreen}
                options={{
                    title: 'Blog',
                    headerTitle: () => <Logo height={30} width={78} />,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }} style={styles.headerRight}>
                            <Search height={24} width={24} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: wp(4),
    },
    headerRight: {
        marginRight: wp(3),
    },
})