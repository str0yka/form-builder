import { createSlice } from '@reduxjs/toolkit';

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
    addElement: (state, action: { payload: FormElementType }) => {
      const type = action.payload;

      state.elements.push({ id: new Date().valueOf(), type });
    },
    deleteElement: (state, action: { payload: number }) => {
      const id = action.payload;

      state.elements = state.elements.filter((element) => element.id !== id);

      if (state.controlledElement?.id === id) {
        state.controlledElement = null;
      }
    },
    updateElement: (state, action: { payload: Pick<FormElement, 'id'> & Partial<FormElement> }) => {
      const { id, ...updatedFields } = action.payload;

      const elementIndex = state.elements.findIndex((el) => el.id === id);

      if (elementIndex === -1) return;

      const element = state.elements[elementIndex];
      const updatedElement = { ...element, ...updatedFields };

      state.elements[elementIndex] = updatedElement;
      state.controlledElement = updatedElement;
    },
    selectFormElement: (state, action: { payload: FormElement }) => {
      state.controlledElement = action.payload;
    },
    deselectFormElement: (state) => {
      state.controlledElement = null;
    },
    clear: (state) => {
      state.controlledElement = null;
      state.elements = [];
    },
  },
});

export const builderReducer = builderSlice.reducer;
export const builderActions = builderSlice.actions;
