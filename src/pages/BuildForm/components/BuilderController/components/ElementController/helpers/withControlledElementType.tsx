import { TextFieldController, TitleFieldController } from '../field-controllers';

export const withControlledElementType = (type: FormElementType) => {
  switch (type) {
    case 'TextField': {
      return TextFieldController;
    }
    case 'TitleField': {
      return TitleFieldController;
    }
    default: {
      return null;
    }
  }
};
