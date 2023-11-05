import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
    </div>
  );
};
