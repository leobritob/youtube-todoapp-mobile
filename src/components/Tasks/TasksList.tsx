import { StyleSheet, FlatList } from 'react-native';
import { TaskItem, Props as TaskItemProps } from './TaskItem';

type Props = {
  selectedIndex?: number;
  data: Omit<TaskItemProps, 'onPress'>[];
  onPress: (index: number) => void;
};

export function TasksList({ selectedIndex, data, onPress }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <TaskItem
          {...item}
          isSelected={index === selectedIndex}
          onPress={() => onPress(index)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
