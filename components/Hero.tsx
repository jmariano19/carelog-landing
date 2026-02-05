'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();

  // Define the highlighted title parts for each language
  const titleContent = lang === 'en' ? (
    <>
      Stop relying on <span className="bg-[#E0E9DB] px-2 py-2 inline-block leading-[1.1]">memory</span> for your <span className="bg-[#E0E9DB] px-2 py-2 inline-block leading-[1.1]">health.</span>
    </>
  ) : (
    <>
      Deja de depender de tu <span className="bg-[#E0E9DB] px-2 py-2 inline-block leading-[1.1]">memoria</span> para tu <span className="bg-[#E0E9DB] px-2 py-2 inline-block leading-[1.1]">salud.</span>
    </>
  );

  const privacyText = lang === 'en'
    ? 'Private by default. Share only what you choose.'
    : 'Tu información es tuya. Tú decides qué compartir.';

  return (
    <>
      <section className="h-[460px] flex flex-col items-center justify-center px-4 text-center bg-[#fbf6ee]">
        {/* Main heading with fade animation */}
        <h1
          key={lang}
          className="font-serif text-[51px] font-bold leading-[65px] tracking-[-0.4px] text-[#2d2926] w-[420px] mx-auto mb-6 overflow-visible animate-fadeIn"
        >
          {titleContent}
        </h1>

        {/* Subtitle */}
        <p
          key={`sub-${lang}`}
          className="font-sans text-[23px] font-light leading-[35px] tracking-[-0.4px] text-[#2d2926] w-[323px] mx-auto animate-fadeIn animation-delay-100"
        >
          {t.hero.sub}
        </p>
      </section>

      {/* Privacy Banner */}
      <div className="w-full bg-[#f0ebe3] py-4">
        <div className="max-w-[420px] mx-auto px-6 flex items-center justify-center gap-3">
          <img src="/lock.png" alt="Privacy" className="w-[24px] h-[24px] object-contain" />
          <p className="font-sans text-[14px] font-normal leading-[20px] text-[#2d2926]">
            {privacyText}
          </p>
        </div>
      </div>
    </>
  );
}
