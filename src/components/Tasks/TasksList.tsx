import { StyleSheet, FlatList } from 'react-native';
import { TaskItem, Props as TaskItemProps } from './TaskItem';

type Props = {
  data: TaskItemProps[];
};

export function TasksList({ data }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <TaskItem {...item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
