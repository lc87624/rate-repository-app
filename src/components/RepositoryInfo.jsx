import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import Text from "./Text";
import { Pressable, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    height: 50,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryInfo = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository(id);

  const openGitHubRepository = async () => {
    try {
      await Linking.openURL(repository.url);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: { error.message }</Text>;
  if (!repository) return <Text>Repository not found</Text>;

  return (
    <RepositoryItem item={ repository }>
      <Pressable style={styles.button} onPress={openGitHubRepository}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </RepositoryItem>
  )
};

export default RepositoryInfo
