import React from 'react';
import { useTranslations } from 'next-intl';
import { SafeImage } from '../ui/safe-image';

function BackgroundSection() {
  const t = useTranslations('About.Background');

  return (
    <section id="background" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
              {t('title')}
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">{t('paragraph1')}</p>
            <p className="text-gray-800 mb-6 leading-relaxed">{t('paragraph2')}</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <SafeImage
                src="/history.jpg"
                alt={t('imageAlt')}
                width={500}
                height={300}
                quality={100}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundSection;
