'use client'; // Required for state and filters
import { useState, useEffect } from 'react';
import ModelCard from './ModelCard';
import { demoModels } from '../utils/demoData.js'; // Adjusted path based on structure
import { useTranslation } from 'react-i18next';
import './ModelGallery.css';

const ModelGallery = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    gender: '',
    city: '',
    modelType: ''
  });
  const [filteredModels, setFilteredModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate client-side hydration
    setIsLoading(false);
    const result = demoModels.filter(model => {
      return (!filters.gender || model.gender === filters.gender) &&
             (!filters.city || model.city === filters.city) &&
             (!filters.modelType || model.modelType === filters.modelType);
    });
    setFilteredModels(result);
    console.log('Filtered models:', result); // Debug filtered data
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Render loading state until client is ready
  if (isLoading) {
    return <p className="loading">{t('modelGallery.loading')}</p>;
  }

  return (
    <div className="model-gallery">
      {/* Filter Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">{t('modelGallery.allGenders')}</option>
            <option value="Female">{t('modelGallery.female')}</option>
            <option value="Male">{t('modelGallery.male')}</option>
          </select>
          <select
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">{t('modelGallery.allCities')}</option>
            <option value="New York">{t('modelGallery.newYork')}</option>
            <option value="Los Angeles">{t('modelGallery.losAngeles')}</option>
            <option value="Miami">{t('modelGallery.miami')}</option>
            <option value="Chicago">{t('modelGallery.chicago')}</option>
            <option value="Seattle">{t('modelGallery.seattle')}</option>
          </select>
          <select
            name="modelType"
            value={filters.modelType}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">{t('modelGallery.allTypes')}</option>
            <option value="Fashion">{t('modelGallery.fashion')}</option>
            <option value="Commercial">{t('modelGallery.commercial')}</option>
          </select>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        {filteredModels.length > 0 ? (
          filteredModels.map((model, index) => (
            <ModelCard key={model.slug} model={model} index={index} />
          ))
        ) : (
          <p className="loading">{t('modelGallery.noModels')}</p>
        )}
      </div>
    </div>
  );
};

export default ModelGallery;