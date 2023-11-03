import { useSelector } from 'react-redux';

import { builderSelectors } from '~utils/store';

import s from './BuilderPreview.module.css';
import {
  CheckboxFieldPreview,
  DateFieldPreview,
  NumberFieldPreview,
  ParagraphFieldPreview,
  SelectFieldPreview,
  SeparatorFieldPreview,
  SpaceFieldPreview,
  SubtitleFieldPreview,
  TextFieldPreview,
  TextareaFieldPreview,
  TitleFieldPreview,
} from './preview-fields';

export const BuilderPreview = () => {
  const elements = useSelector(builderSelectors.getElements);

  return (
    <div className={s.previewContainer}>
      {elements.map((element) => {
        if (element.type === 'DateField') {
          return (
            <div className={s.previewItemContainer}>
              <DateFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'NumberField') {
          return (
            <div className={s.previewItemContainer}>
              <NumberFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'ParagraphField') {
          return (
            <div className={s.previewItemContainer}>
              <ParagraphFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'SelectField') {
          return (
            <div className={s.previewItemContainer}>
              <SelectFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'SeparatorField') {
          return <SeparatorFieldPreview {...element.extraAttributes} />;
        }

        if (element.type === 'SpaceField') {
          return <SpaceFieldPreview {...element.extraAttributes} />;
        }

        if (element.type === 'SubtitleField') {
          return (
            <div className={s.previewItemContainer}>
              <SubtitleFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'TextField') {
          return (
            <div className={s.previewItemContainer}>
              <TextFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'TextareaField') {
          return (
            <div className={s.previewItemContainer}>
              <TextareaFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'TitleField') {
          return (
            <div className={s.previewItemContainer}>
              <TitleFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        if (element.type === 'CheckboxField') {
          return (
            <div className={s.previewItemContainer}>
              <CheckboxFieldPreview {...element.extraAttributes} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
