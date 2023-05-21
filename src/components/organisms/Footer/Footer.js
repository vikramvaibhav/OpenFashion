import { View } from 'react-native';
import React, { memo } from 'react';

import styles from './FooterStyle';
import { AppText, Divider } from '../../atoms';
import Twitter from '../../../assets/icons/Twitter.svg';
import Instagram from '../../../assets/icons/Instagram.svg';
import YouTube from '../../../assets/icons/YouTube.svg';

const Footer = () => {
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
                <View>
                    <AppText style={styles.contactInfoText}>Blog</AppText>
                </View>
            </View>
            <View style={styles.copyrightContainer}>
                <AppText style={styles.copyrightInfoText}>
                    Copyright© Aplaun All Rights Reserved.
                </AppText>
            </View>
        </View>
    );
};

export default memo(Footer);