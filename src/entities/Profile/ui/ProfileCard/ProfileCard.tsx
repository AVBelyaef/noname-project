import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 isLoading?: boolean;
 error?: string;
 readonly?: boolean;
 onChangeFirstName?: (value?: string) => void;
 onChangeLastName?: (value?: string) => void;
 onChangeCity?: (value?: string) => void;
 onChangeAge?: (value?: string) => void;
 onChangeUsername?: (value?: string) => void;
 onChangeAvatar?: (value?: string) => void;
 onChangeCurrency?: (currency: Currency) => void;
 onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className, data, isLoading, error, readonly,
    onChangeLastName, onChangeFirstName, onChangeAge, onChangeCity,
    onChangeAvatar, onChangeUsername, onChangeCurrency, onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

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
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data.avatar} />
        </div>
        )}
        <Input
          value={data?.first}
          className={cls.input}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          className={cls.input}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          className={cls.input}
          placeholder={t('Ваш город')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          className={cls.input}
          placeholder={t('Ваш возраст')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          className={cls.input}
          placeholder={t('Введите имя пользователя')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          className={cls.input}
          placeholder={t('Введите ссылку на аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={cls.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={cls.input}
        />
      </div>
    </div>
  );
};
