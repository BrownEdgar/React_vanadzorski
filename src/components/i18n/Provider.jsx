import { IntlProvider } from "react-intl";
import messages from "./messages";
import { Fragment } from 'react';

function I18nProvider({ children, language }) {
  return (
    <IntlProvider
      locale={language}
      textComponent={Fragment}
      messages={messages[language]}
    >
      {children}
    </IntlProvider>
  )
}

export default I18nProvider;
