import { useSelector } from 'react-redux';

import { builderActions, builderSelectors, useAppDispatch } from '~utils/store';

import { TextFieldElement, TitleFieldElement } from './components';

export const BuilderElements = () => {
  const dispatch = useAppDispatch();

  const elements = useSelector(builderSelectors.getElements);

  const getDefaultFormElementField = (element: FormElement) => ({
    key: element.id,
    onDelete: () => dispatch(builderActions.deleteElement(element.id)),
    onSelect: () => dispatch(builderActions.selectFormElement(element)),
  });

  return elements.map((element) => {
    if (element.type === 'TextField') {
      return (
        <TextFieldElement
          title={element.extraAttributes.title}
          required={element.extraAttributes.required}
          helperText={element.extraAttributes.helperText}
          label={element.extraAttributes.label}
          {...getDefaultFormElementField(element)}
        />
      );
    }

    if (element.type === 'TitleField') {
      return (
        <TitleFieldElement
          text={element.extraAttributes.text}
          {...getDefaultFormElementField(element)}
        />
      );
    }

    return null;
  });
};
