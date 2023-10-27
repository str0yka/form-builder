import { RootState } from '../store';

export const getBuilder = (state: RootState) => state.builder;

export const getBuiledElements = (state: RootState) => state.builder.elements;

export const getBuiledElementById = (id: number) => (state: RootState) =>
  state.builder.elements.find((element) => element.id === id);
