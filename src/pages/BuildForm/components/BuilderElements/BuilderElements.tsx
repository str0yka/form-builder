import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { builderSelectors } from '~utils/store';

import s from './BuilderElements.module.css';
import { BuilderElement } from './components';

export const BuilderElements = () => {
  const elements = useSelector(
    builderSelectors.getElements,
    (a, b) => JSON.stringify(a) === JSON.stringify(b),
  );

  return (
    <div className={s.elementsWrapper}>
      <div className={s.elementsContainer}>
        {!elements.length && (
          <div className={s.elementsEmptyContainer}>
            <Typography
              fontSize={24}
              fontWeight={500}
            >
              Drop here
            </Typography>
          </div>
        )}
        {!!elements.length && elements.map((element) => <BuilderElement element={element} />)}
      </div>
    </div>
  );
};
