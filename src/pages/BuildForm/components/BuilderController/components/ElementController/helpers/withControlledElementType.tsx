import {
  DateFieldController,
  NumberFieldController,
  ParagraphFieldController,
  SeparatorFieldController,
  SpaceFieldController,
  SubtitleFieldController,
  TextFieldController,
  TitleFieldController,
} from '../field-controllers';

export const withControlledElementType = <Type extends FormElementType>(type: Type) => {
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
    case 'SeparatorField': {
      return SeparatorFieldController;
    }
    case 'SubtitleField': {
      return SubtitleFieldController;
    }
    case 'ParagraphField': {
      return ParagraphFieldController;
    }
    case 'DateField': {
      return DateFieldController;
    }
    case 'NumberField': {
      return NumberFieldController;
    }
    default: {
      return null;
    }
  }
};
