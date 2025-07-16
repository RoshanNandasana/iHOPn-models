'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <div className="home-container">
        <div className="content">
          <h1 className="text-4xl font-bold text-white">HOPn Models</h1>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="/model-gallery" className="btn">
              {t('nav.modelGallery')}
            </Link>
            <Link href="/submit-model" className="btn">
              {t('nav.joinAsModel')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}