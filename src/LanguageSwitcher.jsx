// LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=' flex justify-end w-11/12 mx-auto gap-5 '>
      <button className=' bg-red-300 px-3 py-2 max-w-3xl rounded-md ' onClick={() => changeLanguage('en')}>English</button>
      <button className=' bg-red-300 px-3 py-2 max-w-3xl rounded-md ' onClick={() => changeLanguage('bn')}>বাংলা</button>
    </div>
  );
}

export default LanguageSwitcher;
