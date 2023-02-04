import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // FIXME: remove setTimeout
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
