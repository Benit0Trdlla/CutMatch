export const setLanguage = (lang : string) => {
    localStorage.setItem('language', lang);
}

export const getLanguage = () => {
    let language
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        return language = localStorage.getItem('language') as string;
    }
    return language = 'ES'
}