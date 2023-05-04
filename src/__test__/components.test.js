import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Header from '../components/Header';
import CoinsList from '../components/CoinsList';
import CoinDetails from '../components/CoinDetails';

describe('React component test', () => {
  it('Header component expected to render appropriately', () => {
    const header = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(header).toMatchSnapshot();
  });
  it('Coin list component should render as expected', () => {
    const list = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <CoinsList />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(list).toMatchSnapshot();
  });
  it('Coin info component should render appropriately', () => {
    const info = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <CoinDetails />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(info).toMatchSnapshot();
  });
});
