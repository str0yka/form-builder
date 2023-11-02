import {
  DateFieldElement,
  NumberFieldElement,
  SeparatorFieldElement,
  SpaceFieldElement,
  SubtitleFieldElement,
  TextFieldElement,
  TitleFieldElement,
} from '../fields';

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
    case 'SeparatorField': {
      return SeparatorFieldElement;
    }
    case 'SubtitleField': {
      return SubtitleFieldElement;
    }
    case 'NumberField': {
      return NumberFieldElement;
    }
    case 'DateField': {
      return DateFieldElement;
    }
    default: {
      return null;
    }
  }
};
