import { getLanguage } from '@/lib/language';
import { useHidratationSolution } from '@/hooks/useHidratationSolution';
import { LANGUAGES } from '@/lib/consts';

// tipo de las llaves ('EN' | 'ES')
export type LanguageCode = keyof typeof LANGUAGES;

const DEFAULT_LANG: LanguageCode = 'ES';

export const useTranslation = () => {
    const isClient = useHidratationSolution()

    const rawLanguage = (isClient && getLanguage()) || DEFAULT_LANG;

    // Validación
    const currentLang: LanguageCode = (rawLanguage in LANGUAGES)
        ? (rawLanguage as LanguageCode)
        : DEFAULT_LANG;

    return {
        t: LANGUAGES[currentLang],
        lang: currentLang
    };
};