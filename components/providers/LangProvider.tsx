'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Lang = 'vi' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextValue>({ lang: 'vi', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('vi')

  useEffect(() => {
    const saved = localStorage.getItem('vm_lang')
    if (saved === 'vi' || saved === 'en') {
      apply(saved)
      setLangState(saved)
    }
  }, [])

  const apply = (l: Lang) => {
    document.documentElement.setAttribute('data-lang', l)
    document.documentElement.setAttribute('lang', l)
  }

  const setLang = (l: Lang) => {
    setLangState(l)
    apply(l)
    localStorage.setItem('vm_lang', l)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
