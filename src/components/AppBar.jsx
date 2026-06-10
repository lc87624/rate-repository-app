import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import { useApolloClient, useQuery } from '@apollo/client/react';
import theme from '../theme';
import Text from './Text';
import { GET_CURRENT_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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

const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <Pressable onPress={handleSignOut}>
      <Text style={styles.tabText}>Sign out</Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { data } = useQuery(GET_CURRENT_USER);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <AppBarTab text="Repositories" to="/" />
        {data?.me ? <SignOutTab /> : <AppBarTab text="Sign in" to="/signin" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
