import { useSelector } from 'react-redux';

import { builderSelectors } from '~utils/store';

import { ElementController, MainController } from './components';

export const BuilderController = () => {
  const controlledElement = useSelector(builderSelectors.getControlledElement);

  if (!controlledElement) {
    return <MainController />;
  }

  return <ElementController controlledElement={controlledElement} />;
};
