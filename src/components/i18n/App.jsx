import { useState } from 'react';
import './App.css'
import I18nProvider from './Provider';
import Translate from './Translate';

function App() {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = (e) => {
    if (e.target.tagName === "LI") {
      setLanguage(e.target.dataset.language)
    }
  }

  return (
    <I18nProvider language={language}>
      <div>
        <header>
          <ul onClick={toggleLanguage}>
            <li data-language='am'>🇦🇲</li>
            <li data-language='ru'>🇷🇺</li>
            <li data-language='en'>🇺🇸</li>
          </ul>
        </header>
        <main>
          <h1>{Translate('title')}</h1>
          <p>{Translate('desc')}</p>
        </main>
      </div>
    </I18nProvider>

  );
}

export default App;
