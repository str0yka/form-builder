import { RootState } from '../store';

const getState = (state: RootState) => state.builder;

const getElements = (state: RootState) => state.builder.elements;

const getElementById = (id: number) => (state: RootState) =>
  state.builder.elements.find((element) => element.id === id);

const getControlledElement = (state: RootState) => state.builder.controlledElement;

export const builderSelectors = {
  getState,
  getElements,
  getElementById,
  getControlledElement,
};
