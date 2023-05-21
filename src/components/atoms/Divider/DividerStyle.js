import { StyleSheet } from 'react-native';
import colors from '../../../config/Colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(25),
    },
    dividerLine: {
        flex: 1,
        height: wp(0.075),
        backgroundColor: colors.label,
    },
    square: {
        borderColor: colors.label,
        borderWidth: wp(0.075),
        width: wp(2.5),
        height: wp(2.5),
        transform: [{ rotate: '45deg' }],
    },
});


export default styles;