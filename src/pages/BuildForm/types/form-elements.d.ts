type FormElementType = 'TitleField' | 'TextField';

interface FormElementBase<ElementType extends FormElementType> {
  id: number;
  type: ElementType;
}

interface TitleFieldFormElement extends FormElementBase<'TitleField'> {
  text: string;
}

interface TextFieldFormElement extends FormElementBase<'TextField'> {
  required: boolean;
  title?: string;
  helperText?: string;
  label?: string;
}

type FormElement = TitleFieldFormElement | TextFieldFormElement;

type FormElementProps<Element extends FormElement> = Omit<Element, 'id' | 'type'>;
