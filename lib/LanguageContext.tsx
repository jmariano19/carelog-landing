'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { dictionary, LangKey } from './i18n';

type Dictionary = typeof dictionary;
type Translations = Dictionary[LangKey];

type LanguageContextType = {
  lang: LangKey;
  setLang: (lang: LangKey) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangKey>('en');

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
