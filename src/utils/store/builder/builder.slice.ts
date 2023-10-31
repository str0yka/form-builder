import { createSlice } from '@reduxjs/toolkit';

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
    addElement: (state, action: { payload: { type: FormElementType; index?: number } }) => {
      const { type, index = state.elements.length } = action.payload;
      const extraAttributes = DEFAULT_EXTRA_ATTRIBUTES[type];
      const id = new Date().valueOf();

      const element = { id, type, extraAttributes } as FormElement;

      state.elements.splice(index, 0, element);
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
    selectFormElement: (state, action: { payload: FormElement }) => {
      state.controlledElement = action.payload;
    },
    deselectFormElement: (state) => {
      state.controlledElement = null;
    },
    changeElementOrder: (state, action: { payload: { index?: number; id: FormElement['id'] } }) => {
      const { id, index = state.elements.length - 1 } = action.payload;

      const element = state.elements.find((el) => el.id === id);

      if (!element) return;

      state.elements = state.elements.filter((el) => el.id !== id);

      state.elements.splice(index, 0, element);
    },
    clear: (state) => {
      state.controlledElement = null;
      state.elements = [];
    },
  },
});

export const builderReducer = builderSlice.reducer;
export const builderActions = builderSlice.actions;
