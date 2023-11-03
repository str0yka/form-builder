import { Modal } from '@mui/material';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import s from './BuilderPage.module.css';
import { BuilderController, BuilderElements } from './components';
import { BuilderPreview } from './components/BuilderPreview/BuilderPreview';

export const BuilderPage = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      {createPortal(
        <Modal
          open={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
        >
          <BuilderPreview />
        </Modal>,
        document.body,
      )}
      <button
        type="button"
        onClick={() => {
          setIsPreviewOpen(true);
        }}
      >
        preview
      </button>
      <div className={s.pageContainer}>
        <div className={s.contentWrapper}>
          <div className={s.contentContainer}>
            <BuilderElements />
          </div>
        </div>
        <div className={s.asideWrapper}>
          <aside className={s.asideContainer}>
            <BuilderController />
          </aside>
        </div>
      </div>
    </>
  );
};
