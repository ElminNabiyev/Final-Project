import React, { createContext, useState } from 'react'
import messagesEn from '../locales/en.json';
import messagesAz from '../locales/az.json';
import messagesSp from '../locales/sp.json';
import messagesIt from '../locales/it.json';
import messagesDe from '../locales/de.json';
import messagesTr from '../locales/tr.json';

export const LangContext = createContext()

function LangProvider({ children }) {
  const messages = {
    en: messagesEn,
    tr: messagesTr,
    az: messagesAz,
    sp: messagesSp,
    it: messagesIt,
    de: messagesDe,
  }

  const [locale, setLocale] = useState("en")

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LangContext.Provider value={{ messages, locale, changeLanguage }}>{children}</LangContext.Provider>
  )
}

export default LangProvider
