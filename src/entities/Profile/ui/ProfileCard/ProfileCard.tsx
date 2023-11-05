import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 isLoading?: boolean;
 error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className, data, isLoading, error,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={
          classNames(cls.ProfileCard, { [cls.loading]: true }, [className])
        }
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={
          classNames(cls.ProfileCard, { }, [className, cls.error])
        }
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};
