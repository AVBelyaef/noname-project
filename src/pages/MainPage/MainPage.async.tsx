import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // FIXME: remove setTimeout
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));
