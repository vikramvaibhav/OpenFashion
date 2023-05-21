import { StyleSheet } from 'react-native';
import colors from '../../../config/Colors';
import typography from '../../../config/Typography';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.titleActive,
        alignItems: 'center',
        padding: wp(2),
        width: '50%',
    },
    buttonText: {
        ...typography.body_xl,
        color: colors.offWhite,
        textTransform: 'uppercase',
    },
});

export default styles;