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

  // Dummy model data (replace with your actual data source or API call)
  const model = {
    slug: slug,
    name: 'Maria',
    bio: 'Professional model with years of experience in fashion and commercial shoots.',
    location: 'New York',
    priceHour: 50,
    priceDay: 200,
    socialLinks: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
      'https://www.instagram.com/p/Cexample/',
    ],
  }; 

  const profileUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/model/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profileUrl).then(() => {
      setCopySuccess(t('profile.copySuccess'));
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Function to embed social content
  const embedSocialContent = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return (
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      );
    } else if (url.includes('instagram.com')) {
      return (
        <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-white">Instagram embed placeholder (API required)</p>
        </div>
      );
    }
    return null;
  };

  const handleRequestBooking = () => {
    alert('Booking request submitted (fake action)');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
          {/* Profile Details */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">{model.name}</h1>
            <p className="text-gray-300 mb-2">{model.bio}</p>
            <p className="text-gray-300 mb-4">{model.location}</p>
            <p className="text-gray-300 mb-4">
              ${model.priceHour}/hr | ${model.priceDay}/day
            </p>
            <button
              className="btn w-40 bg-green-600 hover:bg-green-700"
              onClick={handleRequestBooking}
            >
              Request Booking
            </button>
          </div>

          {/* Social Content Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">{t('profile.socialLinks')}</h3>
            <div className="space-y-4">
              {model.socialLinks.map((link, index) => (
                <div key={index}>{embedSocialContent(link)}</div>
              ))}
            </div>
          </div>

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