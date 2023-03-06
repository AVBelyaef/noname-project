import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    // FIXME: remove setTimeout, imetation server
    setTimeout(() => resolve(import('./LoginForm')), 1500);
  }),
);
