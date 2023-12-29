// YourMainComponent.js
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function YourMainComponent() {
  const { t } = useTranslation();

  return (
    <div>
    <LanguageSwitcher></LanguageSwitcher>
      <p>{t('greeting')}</p>
      <p>{t('content')}</p>
      <p>{t('notes')}</p>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis impedit odio, placeat adipisci ex nulla nemo quis porro obcaecati est perspiciatis voluptates quos dignissimos quas enim perferendis quidem totam.
    </div>
  );
}

export default YourMainComponent;
