import { createSlice } from '@reduxjs/toolkit';

import { moveArrayElement, swapArrayElements } from '~utils/helpers';

import { DEFAULT_EXTRA_ATTRIBUTES } from './builder.constants';

interface BuilderState {
  controlledElement: FormElement | null;
  elements: FormElement[];
}

const initialState: BuilderState = {
  controlledElement: null,
  elements: [],
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addElement: (state, action: { payload: { type: FormElementType; toIndex?: number } }) => {
      const { type, toIndex = state.elements.length } = action.payload;
      const extraAttributes = DEFAULT_EXTRA_ATTRIBUTES[type];
      const id = new Date().valueOf();

      const element = { id, type, extraAttributes } as FormElement;

      state.elements.splice(toIndex, 0, element);
    },
    deleteElement: (state, action: { payload: number }) => {
      const id = action.payload;

      state.elements = state.elements.filter((element) => element.id !== id);

      if (state.controlledElement?.id === id) {
        state.controlledElement = null;
      }
    },
    updateElement: (
      state,
      action: { payload: Pick<FormElement, 'id'> & Partial<FormElement['extraAttributes']> },
    ) => {
      const { id, ...updatedFields } = action.payload;

      const element = state.elements.find((el) => el.id === id);

      if (!element) return;

      const updatedExtraAttributes = { ...element.extraAttributes, ...updatedFields };

      element.extraAttributes = updatedExtraAttributes;

      if (state.controlledElement?.id === element.id) {
        state.controlledElement.extraAttributes = updatedExtraAttributes;
      }
    },
    swapElements: (state, action: { payload: { firstIndex: number; secondIndex: number } }) => {
      const { firstIndex, secondIndex } = action.payload;

      state.elements = swapArrayElements(state.elements, firstIndex, secondIndex);
    },
    moveElement: (state, action: { payload: { fromIndex: number; toIndex: number } }) => {
      const { fromIndex, toIndex } = action.payload;

      state.elements = moveArrayElement(state.elements, fromIndex, toIndex);
    },
    selectFormElement: (state, action: { payload: FormElement }) => {
      state.controlledElement = action.payload;
    },
    deselectFormElement: (state) => {
      state.controlledElement = null;
    },
  },
});

export const builderReducer = builderSlice.reducer;
export const builderActions = builderSlice.actions;
