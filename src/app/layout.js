'use client';
import '../assets/styles/global.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18n}>
          <Header />
          {children}
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}