import { useSelector } from 'react-redux';

import { AppStore } from '../store';

export const useAppSelector = useSelector<AppStore>;
