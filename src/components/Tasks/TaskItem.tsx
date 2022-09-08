import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
  isSelected?: boolean;
  label: string;
  status?: 'READY' | 'IN_PROGRESS' | 'FINISHED';
};

const tinyCheckImage = require('../../../assets/tiny-check.png');

export function TaskItem({
  isSelected = false,
  label,
  status = 'READY',
}: Props) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.container, isSelected && styles.containerSelected]}
    >
      <Text style={styles.label}>{label}</Text>
      {status === 'IN_PROGRESS' && (
        <Text style={styles.statusText}>In progress</Text>
      )}
      {status === 'FINISHED' && <Image source={tinyCheckImage} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerSelected: {
    borderLeftWidth: 5,
    borderLeftColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
