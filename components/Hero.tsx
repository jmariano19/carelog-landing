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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" fill="#2e915e"/>
          </svg>
          <p className="font-sans text-[14px] font-normal leading-[20px] text-[#2d2926]">
            {privacyText}
          </p>
        </div>
      </div>
    </>
  );
}
