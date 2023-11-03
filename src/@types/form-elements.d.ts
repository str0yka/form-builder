interface FormElementExtraAttributes {
  TitleField: {
    title: string;
  };
  SubtitleField: {
    subtitle: string;
  };
  ParagraphField: {
    text: string;
  };
  SpaceField: {
    height: number;
  };
  SeparatorField: {};
  TextField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
  NumberField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
  DateField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
  SelectField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
    options: { id: number; text: string }[];
  };
  CheckboxField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
  TextareaField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
}

type FormElementType = keyof FormElementExtraAttributes;

interface FormElementConstructor<Type extends FormElementType> {
  id: number;
  type: Type;
  extraAttributes: FormElementExtraAttributes[Type];
}

type TitleFieldFormElement = FormElementConstructor<'TitleField'>;
type TextFieldFormElement = FormElementConstructor<'TextField'>;
type SpaceFieldFormElement = FormElementConstructor<'SpaceField'>;
type SeparatorFieldFormElement = FormElementConstructor<'SeparatorField'>;
type SubtitleFieldFormElement = FormElementConstructor<'SubtitleField'>;
type ParagraphFieldFormElement = FormElementConstructor<'ParagraphField'>;
type DateFieldFormElement = FormElementConstructor<'DateField'>;
type NumberFieldFormElement = FormElementConstructor<'NumberField'>;
type SelectFieldFormElement = FormElementConstructor<'SelectField'>;
type TextareaFieldFormElement = FormElementConstructor<'TextareaField'>;

type FormElement =
  | TitleFieldFormElement
  | TextFieldFormElement
  | SpaceFieldFormElement
  | SeparatorFieldFormElement
  | SubtitleFieldFormElement
  | ParagraphFieldFormElement
  | DateFieldFormElement
  | NumberFieldFormElement
  | SelectFieldFormElement
  | TextareaFieldFormElement;
