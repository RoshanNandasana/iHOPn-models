import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;