import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import { verticalScale } from '../../utility/Scale';

const styles = StyleSheet.create({
  mainHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: allColors.white,
    marginVertical : verticalScale(5)
  },
});
export default styles;
