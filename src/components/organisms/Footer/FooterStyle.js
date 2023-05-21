import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import typography from '../../../config/Typography';
import colors from '../../../config/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: wp(5.5),
    },
    contactInfoContainer: {
        alignItems: 'center',
        marginVertical: wp(2.5),
    },
    contactInfoText: {
        ...typography.subTitle_l,
    },
    copyrightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(3.75),
        backgroundColor: colors.rightsBackground,
    },
    copyrightInfoText: {
        ...typography.body_s,
    },
});

export default styles;