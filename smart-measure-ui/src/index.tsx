import 'core-js'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from './i18n/index';

import Homepage from "./pages/homepage"

const g: any = global;
g.I18n = {
  // This is to remove failures cause by code from coupa-common-js trying to access the below functions
  // The errors will likely be fixed in the new version of coupa-common-js
  t: function (key) { return key; },
  l: function (key) { return key; },
  dateFormat: 'mm/dd/yyyy',
  lookup: () => { }
}


const App = () => {

  const language = navigator.language.split(/[-_]/)[0];
  const messages = translations[language] || translations['en'];


  return (
    <IntlProvider locale={language} messages={messages}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={Homepage}
          />
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));