import {
  HomeScreenActionsEnum,
  IHomeScreen,
  IHomeScreenActions,
} from './types';

export function homeScreenReducer(
  state: IHomeScreen,
  action: IHomeScreenActions
): IHomeScreen {
  switch (action.type) {
    case HomeScreenActionsEnum.ToggleModal:
      return { ...state, isModalVisible: action.payload.isModalVisible };

    case HomeScreenActionsEnum.CreateTask:
      return {
        ...state,
        isModalVisible: false,
        tasks: [...state.tasks, action.payload.task],
      };

    case HomeScreenActionsEnum.SelectTaskIndex:
      return {
        ...state,
        selectedTaskIndex: action.payload.selectedTaskIndex,
      };

    case HomeScreenActionsEnum.SetTaskStatus:
      const tasks = [...state.tasks];
      tasks[state.selectedTaskIndex].status = action.payload.taskStatus;
      return {
        ...state,
        tasks,
      };

    default:
      return { ...state };
  }
}

export const homeScreenInitialState: IHomeScreen = {
  tasks: [],
  isModalVisible: false,
  selectedTaskIndex: undefined,
};
