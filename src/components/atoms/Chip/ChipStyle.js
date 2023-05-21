import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import colors from '../../../config/Colors';
import typography from '../../../config/Typography';

const styles = StyleSheet.create({
    chip: {
        backgroundColor: colors.inputBackground,
        borderRadius: wp(12.5),
        padding: wp(1),
        alignSelf: 'flex-start',
        minWidth: wp(20),
        alignItems: 'center',
    },
    chipLable: {
        ...typography.body_m,
        letterSpacing: wp(0.125),
        color: colors.body,
    },
});


export default styles