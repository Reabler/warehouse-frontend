import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './warehouse.css';
import App from './App';

// Base Web
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';

// Redux
import { Provider } from 'react-redux'
import { store } from './store/store'

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
