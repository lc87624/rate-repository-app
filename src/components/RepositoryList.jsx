import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

export const RepositoryListContainer = ({ repositories, onRepositoryPress = () => {} }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onRepositoryPress(item.id)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  return (
    <RepositoryListContainer
      repositories={repositories}
      onRepositoryPress={(id) => navigate(`/repository/${id}`)}
    />
  );
};

export default RepositoryList;
