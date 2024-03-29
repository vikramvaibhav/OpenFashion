import { Pressable, View } from 'react-native';
import React from 'react';

import styles from './FooterStyle';
import { AppText, Divider } from '../../atoms';
import Twitter from '../../../assets/icons/Twitter.svg';
import Instagram from '../../../assets/icons/Instagram.svg';
import YouTube from '../../../assets/icons/YouTube.svg';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const { navigate } = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Twitter height={24} width={24} />
                </View>
                <View>
                    <Instagram height={24} width={24} />
                </View>
                <View>
                    <YouTube height={24} width={24} />
                </View>
            </View>
            <Divider />
            <View style={styles.contactInfoContainer}>
                <AppText style={styles.contactInfoText}>support@gmail.com</AppText>
                <AppText style={styles.contactInfoText}>+91 9660155401</AppText>
                <AppText style={styles.contactInfoText}>
                    09:00 - 19:00 - Everyday
                </AppText>
            </View>
            <Divider />
            <View style={styles.container}>
                <View>
                    <AppText style={styles.contactInfoText}>About</AppText>
                </View>
                <View>
                    <AppText style={styles.contactInfoText}>Contact</AppText>
                </View>
                <Pressable onPress={() => navigate("BlogListScreen")}>
                    <AppText style={styles.contactInfoText}>Blog</AppText>
                </Pressable>
            </View>
            <View style={styles.copyrightContainer}>
                <AppText style={styles.copyrightInfoText}>
                    Copyright© Aplaun All Rights Reserved.
                </AppText>
            </View>
        </View>
    );
};

export default Footer;