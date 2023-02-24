/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(cls.Navbar)}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda laudantium libero sapiente eveniet, odio illo ullam,
        in dolore quaerat exercitationem quis
        fugit impedit soluta necessitatibus excepturi,
        cumque ipsam laborum sequi.
      </Modal>
    </div>
  );
}
