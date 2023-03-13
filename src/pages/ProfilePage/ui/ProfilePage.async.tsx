import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // FIXME: remove setTimeout
  setTimeout(() => resolve(import('../ui/ProfilePage')), 1500);
}));
