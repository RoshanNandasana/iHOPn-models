'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SubmitModelForm.css';

const SubmitModelForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    city: '',
    modelType: '',
    priceHour: '',
    priceDay: '',
    socialLinks: [''],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(t('submitModelForm.submitSuccess'));
  };

  return (
    <div className="submit-form-container">
      <form onSubmit={handleSubmit} className="submit-form">
        <h2 className="form-title">{t('submitModelForm.title')}</h2>

        <input
          placeholder={t('submitModelForm.namePlaceholder')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
        />

        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="form-input"
        >
          <option value="">{t('submitModelForm.genderPlaceholder')}</option>
          <option value="Male">{t('submitModelForm.genderMale')}</option>
          <option value="Female">{t('submitModelForm.genderFemale')}</option>
          <option value="Other">{t('submitModelForm.genderOther')}</option>
        </select>

        <input
          placeholder={t('submitModelForm.cityPlaceholder')}
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="form-input"
        />

        <input
          placeholder={t('submitModelForm.modelTypePlaceholder')}
          value={formData.modelType}
          onChange={(e) => setFormData({ ...formData, modelType: e.target.value })}
          className="form-input"
        />

        <input
          placeholder={t('submitModelForm.priceHourPlaceholder')}
          type="number"
          value={formData.priceHour}
          onChange={(e) => setFormData({ ...formData, priceHour: e.target.value })}
          className="form-input"
        />

        <input
          placeholder={t('submitModelForm.priceDayPlaceholder')}
          type="number"
          value={formData.priceDay}
          onChange={(e) => setFormData({ ...formData, priceDay: e.target.value })}
          className="form-input"
        />

        <input
          placeholder={t('submitModelForm.socialLinkPlaceholder')}
          value={formData.socialLinks[0]}
          onChange={(e) =>
            setFormData({ ...formData, socialLinks: [e.target.value] })
          }
          className="form-input"
        />

        <button type="submit" className="btn">
          {t('submitModelForm.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default SubmitModelForm;