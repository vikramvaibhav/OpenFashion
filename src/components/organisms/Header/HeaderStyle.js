import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: wp(4),
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});
export default styles;