import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.brandTitle')}</h3>
          <p className="footer-text">{t('footer.brandDescription')}</p>
          <div className="social-links">
            <a href="#" className="social-link">{t('footer.socialFB')}</a>
            <a href="#" className="social-link">{t('footer.socialIG')}</a>
            <a href="#" className="social-link">{t('footer.socialTW')}</a>
            <a href="#" className="social-link">{t('footer.socialPR')}</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.quickLinksTitle')}</h3>
          <ul className="footer-links">
            <li><a href="#">{t('footer.quickLinkWomen')}</a></li>
            <li><a href="#">{t('footer.quickLinkMen')}</a></li>
            <li><a href="#">{t('footer.quickLinkTopBrand')}</a></li>
            <li><a href="#">{t('footer.quickLinkHighestRated')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.contactTitle')}</h3>
          <p className="footer-text">{t('footer.contactEmail')}</p>
          <p className="footer-text">{t('footer.contactPhone')}</p>
          <button className="shop-now-btn">{t('footer.collabButton')}</button>
        </div>
      </div>
      <p className="copyright">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;