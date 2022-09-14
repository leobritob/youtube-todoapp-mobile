export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreateTask = 'CREATE_TASK',
}

export type ITask = {
  isSelected?: boolean;
  label: string;
  status?: 'READY' | 'IN_PROGRESS' | 'FINISHED';
};

export type IHomeScreen = {
  isModalVisible: boolean;
  tasks: ITask[];
};

export type IToggleModalPayload = Pick<IHomeScreen, 'isModalVisible'>;

export type IToggleModalAction = {
  type: HomeScreenActionsEnum.ToggleModal;
  payload: IToggleModalPayload;
};

export type ICreateTaskPayload = {
  task: ITask;
};

export type ICreateTaskAction = {
  type: HomeScreenActionsEnum.CreateTask;
  payload: ICreateTaskPayload;
};

export type IHomeScreenActions = IToggleModalAction | ICreateTaskAction;
