export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreateTask = 'CREATE_TASK',
  SelectTaskIndex = 'SELECT_TASK_INDEX',
  SetTaskStatus = 'SET_TASK_STATUS',
}

export enum TaskStepsEnum {
  Ready = 'READY',
  InProgress = 'IN_PROGRESS',
  Finished = 'FINISHED',
}

export type ITask = {
  isSelected?: boolean;
  label: string;
  status?: TaskStepsEnum;
};

export type IHomeScreen = {
  isModalVisible: boolean;
  tasks: ITask[];
  selectedTaskIndex?: number;
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

export type ISelectTaskIndexPayload = {
  selectedTaskIndex: number;
};

export type ISelectTaskIndexAction = {
  type: HomeScreenActionsEnum.SelectTaskIndex;
  payload: ISelectTaskIndexPayload;
};

export type ISetTaskStatusPayload = {
  taskStatus: TaskStepsEnum;
};

export type ISetTaskStatusAction = {
  type: HomeScreenActionsEnum.SetTaskStatus;
  payload: ISetTaskStatusPayload;
};

export type IHomeScreenActions =
  | IToggleModalAction
  | ICreateTaskAction
  | ISelectTaskIndexAction
  | ISetTaskStatusAction;
