import { TextFieldElement, TitleFieldElement } from '../../fields';

export const withFormElement = (formElement: FormElement) => {
  if (formElement.type === 'TextField') {
    const { id, type, ...props } = formElement;
    return <TextFieldElement {...props} />;
  }

  if (formElement.type === 'TitleField') {
    const { id, type, ...props } = formElement;
    return <TitleFieldElement {...props} />;
  }

  return null;
};
