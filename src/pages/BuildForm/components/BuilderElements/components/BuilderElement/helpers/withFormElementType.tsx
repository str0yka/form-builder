import { TextFieldElement, TitleFieldElement } from '../fields';

export const withFormElementType = (type: FormElementType) => {
  switch (type) {
    case 'TextField': {
      return TextFieldElement;
    }
    case 'TitleField': {
      return TitleFieldElement
    }
    default: {
      return null;
    }
  }
};
