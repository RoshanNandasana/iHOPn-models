'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

// Dynamically import QRCode with SSR disabled
const QRCode = dynamic(() => import('qrcode.react').then(mod => mod.default), {
  ssr: false,
});

export default function ModelProfile() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [copySuccess, setCopySuccess] = useState('');

  // Dummy model data (replace with your actual data source)
  const model = { slug: slug, name: 'Maria', bio: 'Professional model', location: 'New York', priceHour: 50, priceDay: 200, socialLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'] }; // Example data

  const profileUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/model/${slug}`;
  const handleCopyLink = () => {
    navigator.clipboard.writeText(profileUrl).then(() => {
      setCopySuccess(t('profile.copySuccess'));
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
          {/* QR Code Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">{t('profile.qrCode')}</h3>
            {typeof window !== 'undefined' && (
              <div className="flex flex-col items-center">
                <QRCode value={profileUrl} size={200} className="mb-2" />
                <button className="btn w-40" onClick={handleCopyLink}>
                  {t('profile.copyLink')}
                </button>
                {copySuccess && <p className="text-green-400 mt-2">{copySuccess}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}