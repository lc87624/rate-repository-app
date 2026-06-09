import { View, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingHorizontal: 40,
    backgroundColor: theme.colors.appBarBackground,
  },
  tabText: {
    color: 'white',
    fontSize: 28,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text }) => {
    return (<Pressable><Text style={styles.tabText}>{text}</Text></Pressable>);
};

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
