import { SpaceFieldElement, TextFieldElement, TitleFieldElement } from '../fields';

export const withFormElementType = <Type extends FormElementType>(type: Type) => {
  switch (type) {
    case 'TextField': {
      return TextFieldElement;
    }
    case 'TitleField': {
      return TitleFieldElement;
    }
    case 'SpaceField': {
      return SpaceFieldElement;
    }
    default: {
      return null;
    }
  }
};
