import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="nav-link">{t('nav.home')}</a>
          <a href="/model-gallery" className="nav-link">{t('nav.modelGallery')}</a>
          <a href="/submit-model" className="nav-link">{t('nav.joinAsModel')}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;