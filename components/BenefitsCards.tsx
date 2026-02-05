'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function BenefitsCards() {
    const { lang } = useLanguage();

    const content = {
        en: {
            card1: {
                title: "For you and your family",
                text1: "Less anxiety from",
                highlight: '"What am I forgetting?"',
                text2: "Clear patterns over time. Better questions for your doctor."
            },
            card2: {
                title: "For your doctor",
                text1: "Faster context, cleaner history,",
                highlight: "less back-and-forth",
                text2: "— more time for decisions, less time reconstructing."
            }
        },
        es: {
            card1: {
                title: "Para ti y tu familia",
                text1: "Menos ansiedad por",
                highlight: '"¿Qué se me olvidó?"',
                text2: "Patrones claros. Mejores preguntas para tu médico."
            },
            card2: {
                title: "Para tu médico",
                text1: "Contexto más rápido, historia más clara,",
                highlight: "menos ida y vuelta",
                text2: "— más tiempo para decisiones, menos reconstruyendo."
            }
        }
    };

    const t = content[lang];

    return (
        <section className="px-[17px] pt-12 pb-6 flex flex-col gap-6 max-w-[420px] mx-auto">
            {/* Card 1: For you and your family */}
            <div
                className="relative rounded-[10px] overflow-hidden border border-[rgba(43,38,35,0.14)] shadow-[0_18px_20px_rgba(40,31,26,0.08)] h-[296px] card-hover"
                style={{
                    background: `
                        radial-gradient(ellipse 460px 370px at 40% -20%, rgba(233,179,81,0.18) 0%, rgba(233,179,81,0) 55%),
                        linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)
                    `
                }}
            >
                {/* Image - woman with phone */}
                <div className="absolute left-[-10px] bottom-0 h-[410px] w-[270px]">
                    <img
                        src="/woman-phone.png"
                        alt="Woman with phone"
                        className="h-full w-full object-contain object-bottom"
                    />
                </div>

                {/* Text Content */}
                <div className="absolute right-[18px] top-[40px] w-[180px]">
                    <h3 className="font-serif text-[25px] font-bold leading-[30px] tracking-[-0.4px] text-[#2d2926] mb-3">
                        {t.card1.title}
                    </h3>
                    <p className="font-sans text-[17px] font-light leading-[24px] tracking-[-0.4px] text-[#2d2926]">
                        {t.card1.text1}{' '}
                        <span className="bg-[rgba(46,145,94,0.13)] px-1 rounded-[2px]">
                            {t.card1.highlight}
                        </span>{' '}
                        {t.card1.text2}
                    </p>
                </div>
            </div>

            {/* Card 2: For your doctor */}
            <div className="relative rounded-[10px] overflow-hidden border border-[rgba(43,38,35,0.14)] shadow-[0_18px_20px_rgba(40,31,26,0.08)] h-[292px] card-hover">
                {/* Background Image */}
                <img
                    src="/Doctor.png"
                    alt="Doctor"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    {/* Notebook emoji */}
                    <span className="text-[32px] mb-3">🗒️</span>

                    <h3 className="font-serif text-[25px] font-bold leading-[35px] tracking-[-0.4px] text-white mb-3">
                        {t.card2.title}
                    </h3>
                    <p className="font-sans text-[18px] font-light leading-[25px] tracking-[-0.4px] text-white max-w-[270px]">
                        {t.card2.text1}{' '}
                        <span className="font-bold">{t.card2.highlight}</span>{' '}
                        {t.card2.text2}
                    </p>
                </div>
            </div>
        </section>
    );
}
