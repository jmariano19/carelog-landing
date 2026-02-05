'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-150 ease-in-out border-b border-[rgba(43,38,35,0.12)] backdrop-blur-[5px] bg-[rgba(247,242,233,0.86)] ${scrolled ? 'h-16 shadow-header' : 'h-[72px]'}`}
        >
            <div className="max-w-[420px] mx-auto h-full px-[18px] flex items-center justify-between">
                {/* Brand Logo */}
                <img
                    src="/carelog-logo.svg"
                    alt="CareLog"
                    className="h-[26px] w-auto"
                />

                {/* Right side: Language Toggle + CTA with 11px gap */}
                <div className="flex items-center gap-[11px]">
                    {/* Language Toggle */}
                    <div className="flex gap-[4px] p-[6px] h-[43px] items-center rounded-full border border-[rgba(43,38,35,0.12)] bg-[rgba(255,255,255,0.55)]">
                        <button
                            onClick={() => setLang('en')}
                            className={`font-sans text-[12px] font-semibold px-3 h-[29px] rounded-full transition-all duration-200 tracking-[0.2px] ${
                                lang === 'en'
                                    ? 'bg-[rgba(233,179,81,0.28)] text-[#2b2623] shadow-[inset_0_0_0_1px_rgba(233,179,81,0.35)]'
                                    : 'text-[rgba(43,38,35,0.7)] hover:text-ink hover:scale-105'
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLang('es')}
                            className={`font-sans text-[12px] font-semibold px-3 h-[29px] rounded-full transition-all duration-200 tracking-[0.2px] ${
                                lang === 'es'
                                    ? 'bg-[rgba(233,179,81,0.28)] text-[#2b2623] shadow-[inset_0_0_0_1px_rgba(233,179,81,0.35)]'
                                    : 'text-[rgba(43,38,35,0.7)] hover:text-ink hover:scale-105'
                            }`}
                        >
                            ES
                        </button>
                    </div>

                    {/* CTA - dot and text centered together with hover animation */}
                    <a
                        href={`https://wa.me/18627775277?text=${lang === 'en' ? 'Hello' : 'Hola'}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[34px] px-4 rounded-full border border-[#2eab6b] bg-gradient-to-b from-[#2e915e] to-[#216e46] text-white text-[12px] font-semibold tracking-[0.2px] shadow-[0_14px_28px_rgba(46,145,94,0.2)] transition-all duration-200 hover:scale-110 active:scale-105 flex items-center justify-center gap-2 no-underline"
                    >
                        <span className="w-2 h-2 rounded-full bg-[rgba(255,247,238,0.7)] shadow-[0_0_0_2px_rgba(255,247,238,0.35)]" />
                        {t.header.cta}
                    </a>
                </div>
            </div>
        </header>
    );
}
