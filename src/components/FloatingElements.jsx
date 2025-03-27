import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FloatingElements() {
  const [isTranslatorOpen, setIsTranslatorOpen] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,ur,ta,te,kn,as,bn,gu,ml,mr,ne,or,pa,sa,sd,si',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div 
        className={`floating-translator ${isTranslatorOpen ? 'active' : ''}`} 
        id="translatorButton"
        onClick={(e) => {
          e.stopPropagation();
          setIsTranslatorOpen(!isTranslatorOpen);
        }}
      >
        <i className="fas fa-language"></i>
        <div className="translator-dropdown" id="google_translate_element"></div>
      </div>

      <Link to="/appointment" className="floating-appointment">
        <i className="fas fa-calendar-check"></i>
      </Link>
    </>
  );
}

export default FloatingElements;