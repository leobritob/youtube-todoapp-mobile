import { useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import {
  FabButton,
  NewTaskModal,
  NoTasksCard,
  Timer,
  TasksList,
} from '../components';
import { Theme } from '../themes';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        {false ? (
          <NoTasksCard />
        ) : (
          <>
            <View style={styles.timerContainer}>
              <Timer />
            </View>
            <TasksList
              data={[
                {
                  isSelected: true,
                  label: 'Create a frontend project',
                  status: 'IN_PROGRESS',
                },
                {
                  isSelected: false,
                  label: 'Create a frontend project',
                  status: 'READY',
                },
                {
                  isSelected: false,
                  label: 'Create a frontend project',
                  status: 'READY',
                },
              ]}
            />
          </>
        )}
        <FabButton onPress={() => setIsNewTaskModalVisible(true)} />
        <NewTaskModal
          isVisible={isNewTaskModalVisible}
          onClose={() => setIsNewTaskModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    flex: 1,
  },
  timerContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
