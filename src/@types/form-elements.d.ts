type FormElementType = 'TitleField' | 'TextField';

interface FormElementExtraAttributes {
  TextField: {
    required?: () => void;
    title?: string;
    helperText?: string;
    label?: string;
  };
  TitleField: {
    text?: string;
  };
}

type FormElementConstructor<Type extends FormElementType> = {
  id: number;
  type: Type;
  extraAttributes: FormElementExtraAttributes[Type];
};

type TitleFieldFormElement = FormElementConstructor<'TitleField'>;
type TextFieldFormElement = FormElementConstructor<'TextField'>;

type FormElement = TitleFieldFormElement | TextFieldFormElement;
