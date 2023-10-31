type FormElementType = 'TitleField' | 'TextField' | 'SpaceField';

interface FormElementExtraAttributes {
  TextField: {
    required: boolean;
    title: string;
    helperText?: string;
    label?: string;
  };
  TitleField: {
    title: string;
  };
  SpaceField: {
    height: number;
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
