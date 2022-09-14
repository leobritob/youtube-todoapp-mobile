import {
  HomeScreenActionsEnum,
  ICreateTaskAction,
  ICreateTaskPayload,
  IToggleModalAction,
  IToggleModalPayload,
} from './types';

function toggleModal(payload: IToggleModalPayload): IToggleModalAction {
  return {
    type: HomeScreenActionsEnum.ToggleModal,
    payload,
  };
}

function createTask(payload: ICreateTaskPayload): ICreateTaskAction {
  return {
    type: HomeScreenActionsEnum.CreateTask,
    payload,
  };
}

export const HomeScreenActions = {
  toggleModal,
  createTask,
};
