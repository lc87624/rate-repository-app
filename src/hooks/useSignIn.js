import { useMutation, useApolloClient } from '@apollo/client/react';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(
    SIGN_IN
  );

  const signIn = async ({ username, password }) => {
    try {
      const result = await mutate({ variables: { username, password } });
      await authStorage.setAccessToken(result.data.authenticate.accessToken);
      await apolloClient.resetStore();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return [signIn, result];
};

export default useSignIn;
