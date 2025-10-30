import React, { useEffect } from 'react';

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Load the Google Translate API script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the translation widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,mr,hi,kn' }, 'google_translate_element');
    };
  }, []);

  return (
    <div className='text-blue-500' id="google_translate_element"></div>
  );
};

export default GoogleTranslateWidget;