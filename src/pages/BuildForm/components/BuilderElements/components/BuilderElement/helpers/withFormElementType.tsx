import {
  CheckboxFieldElement,
  DateFieldElement,
  NumberFieldElement,
  ParagraphFieldElement,
  SelectFieldElement,
  SeparatorFieldElement,
  SpaceFieldElement,
  SubtitleFieldElement,
  TextFieldElement,
  TextareaFieldElement,
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
    case 'SelectField': {
      return SelectFieldElement;
    }
    case 'CheckboxField': {
      return CheckboxFieldElement;
    }
    case 'ParagraphField': {
      return ParagraphFieldElement;
    }
    case 'TextareaField': {
      return TextareaFieldElement;
    }
    default: {
      return null;
    }
  }
};
