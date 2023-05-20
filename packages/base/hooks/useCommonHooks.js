import { useClickRipple } from './useClickRipple';
import { useScrollToTopOnNav } from './useScrollToTopOnNav';

export const useCommonHooks = () => {
  useScrollToTopOnNav();
  useClickRipple();
}