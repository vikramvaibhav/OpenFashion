import { View } from 'react-native';
import React, { memo } from 'react';
import styles from './HeaderStyle';
import Logo from '../../../assets/images/Logo.svg';
import Menu from '../../../assets/icons/Menu.svg';
import ShoppingBag from '../../../assets/icons/ShoppingBag.svg';

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Menu height={24} width={24} />
            </View>
            <View style={styles.logo}>
                <Logo height={30} width={78} />
            </View>
            <View>
                <ShoppingBag height={24} width={24} />
            </View>
        </View>
    );
};

export default memo(Header);