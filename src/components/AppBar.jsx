import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
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
  tabContainer: {
    flexDirection: 'row',
    gap: 24,
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to}>
      <Text style={styles.tabText}>{text}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <AppBarTab text="Repositories" to="/" />
        <AppBarTab text="Sign In" to="/signin" />
        <AppBarTab text="Sign Out" to="/signout" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
