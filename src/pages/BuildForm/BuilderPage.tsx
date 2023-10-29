import s from './BuilderPage.module.css';
import { BuilderController, BuilderElements } from './components';

export const BuilderPage = () => (
  <div className={s.pageContainer}>
    <div className={s.contentWrapper}>
      <div className={s.contentContainer}>
        <BuilderElements />
      </div>
    </div>
    <aside className={s.asideContainer}>
      <BuilderController />
    </aside>
  </div>
);
