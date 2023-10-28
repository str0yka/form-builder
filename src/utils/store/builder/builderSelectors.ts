import { RootState } from '../store';

export const builderSelectors = {
  getState: (state: RootState) => state.builder,
  getElements: (state: RootState) => state.builder.elements,
  getElementById: (id: number) => (state: RootState) =>
    state.builder.elements.find((element) => element.id === id),
  getControlledElement: (state: RootState) => state.builder.controlledElement,
};
