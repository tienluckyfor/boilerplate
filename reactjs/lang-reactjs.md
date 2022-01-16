# npm i i18next react-i18next i18next-xhr-backend
# public/locales
# src/App.js
```
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation(['translation', 'welcome']);
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <button type="button" onClick={() => changeLanguage('de')}>
        {t('translation:de')}
      </button>
      <button type="button" onClick={() => changeLanguage('en')}>
        {t('translation:en')}
      </button>
      <h1>{t('welcome:title', 'Hello there.')}</h1>
      <p>{t('welcome:content.textOne', 'Welcome at our place.')}</p>
      <p>
        <Trans i18nKey="welcome:content.textTwo">
          Welcome at <strong>our place</strong>.
        </Trans>
      </p>
    </div>
  );
};

export default App;
```
# src/index.js
```
import React, { Suspense } from 'react';
import './i18n';
<Suspense fallback={null}>
    <App />
</Suspense>
```
# vi src/i18n.js
```
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'de'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
    },
  });
export default i18n;
```

# lang class component
import { withTranslation } from "react-i18next";
render() {
  let { t } = this.props;
  return (<>{t("Japanese")}</>)
}
export default withTranslation()(Home);