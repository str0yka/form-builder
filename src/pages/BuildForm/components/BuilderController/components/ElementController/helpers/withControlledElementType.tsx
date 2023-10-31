import {
  SpaceFieldController,
  TextFieldController,
  TitleFieldController,
} from '../field-controllers';

export const withControlledElementType = (type: FormElementType) => {
  switch (type) {
    case 'TextField': {
      return TextFieldController;
    }
    case 'TitleField': {
      return TitleFieldController;
    }
    case 'SpaceField': {
      return SpaceFieldController;
    }
    default: {
      return null;
    }
  }
};
