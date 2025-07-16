'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

// Dynamically import QRCode with SSR disabled
const QRCode = dynamic(
  () =>
    import('react-qr-code')
      .then((mod) => mod.default)
      .catch((err) => {
        console.error('Failed to load QRCode:', err);
        return () => <div>QR Code failed to load</div>;
      }),
  {
    ssr: false,
  }
);

const ModelCard = ({ model, index }) => {
  const { t } = useTranslation();
  const profileUrl = model?.slug
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/model/${model.slug}`
    : '';

  // Ensure model data exists and log socialLinks for debugging
  if (!model || !model.slug) {
    return <div className="text-white">{t('modelCard.invalidData')}</div>;
  }
  console.log('Model socialLinks:', model.socialLinks); // Debug: Check if socialLinks is received

  // Function to validate URLs
  const isValidUrl = (url) => {
    try {
      new URL(url); // Basic URL validation
      return true; // Allow all URLs that can be parsed
    } catch {
      return false;
    }
  };

  // Function to detect and label social platforms
  const getSocialPlatform = (url) => {
    if (!isValidUrl(url)) return t('modelCard.invalidLink');
    if (url.includes('instagram')) return t('modelCard.instagram');
    if (url.includes('youtube') || url.includes('youtu.be')) return t('modelCard.youtube');
    if (url.includes('x.com')) return t('modelCard.x');
    return t('modelCard.social');
  };

  // Handle link click with fallback
  const handleLinkClick = (link, e) => {
    e.preventDefault();
    console.log(`Attempting to open: ${link}`); // Debug click attempt
    try {
      window.open(link, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open link:', error);
    }
  };

  return (
    <div className="model-card relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 w-full max-w-xs p-4 text-white">
      {/* Image with Overlay */}
      <div className="w-full h-72 relative">
        <img
          src={`/assets/images/${model.image?.split('/').pop() || 'placeholder.jpg'}`}
          alt={model.name || t('modelCard.defaultAlt')}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">{model.name || t('modelCard.unknown')}</span>
        </div>
      </div>

      {/* QR Code */}
      {typeof window !== 'undefined' && profileUrl && (
        <div className="flex justify-center mt-4">
          <QRCode value={profileUrl} size={100} className="rounded-md" />
        </div>
      )}

      {/* Details */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{model.name || t('modelCard.unknown')}</h3>
        <p className="text-gray-300 text-sm">
          {model.city || t('modelCard.na')} | ${model.priceHour || t('modelCard.na')}{t('modelCard.perHour')} | $
          {model.priceDay || t('modelCard.na')}{t('modelCard.perDay')}
        </p>
        <p className="text-gray-400 text-sm mt-1">{model.bio || t('modelCard.noBio')}</p>
      </div>

      {/* Social Content Section */}
      <div className="mt-4 text-center">
        <h4 className="text-sm font-semibold">{t('modelCard.socialLinks')}</h4>
        <div className="mt-2 flex justify-center gap-2 flex-wrap">
          {model.socialLinks?.length > 0 ? (
            model.socialLinks.map((link, idx) => (
              <span key={idx}>
                {isValidUrl(link) ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-600 transition-colors underline cursor-pointer break-all"
                    onClick={(e) => handleLinkClick(link, e)}
                    aria-label={`${getSocialPlatform(link)} Link: ${link}`}
                  >
                    {getSocialPlatform(link)}
                  </a>
                ) : (
                  <span className="text-gray-500 cursor-not-allowed">{t('modelCard.invalidLink')}</span>
                )}
              </span>
            ))
          ) : (
            <p className="text-gray-300 text-sm">{t('modelCard.noSocialLinks')}</p>
          )}
        </div>
      </div>

      {/* Animated Border */}
      <div
        className="absolute inset-0 border-2 border-transparent rounded-xl"
        style={{
          borderImage: `linear-gradient(45deg, #6b7280, #9333ea) 1`,
          animation: `pulseBorder 2s infinite ${index * 0.2}s`,
        }}
      />
    </div>
  );
};

// Add this to your CSS or a global stylesheet
const styles = `
  @keyframes pulseBorder {
    0% { border-image-slice: 1; }
    50% { border-image-slice: 1; opacity: 0.7; }
    100% { border-image-slice: 1; }
  }
`;

export default ModelCard;