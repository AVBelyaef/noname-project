import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        /
      </div>
    </div>
  );
}
