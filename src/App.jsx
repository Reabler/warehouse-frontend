import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Sidebar from './components/Sidebar/Sidebar';
import Products from './views/Products';
import Articles from './views/Articles';
import Vendors from './views/Vendors';
import ProductCategories from './views/ProductCategories';

const App = () => {
  return (    
    <Router>
      <div className="App antialiased">
        <div className="flex flex-row">

        <Sidebar />

          <div className="flex-1">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/articles">
                <Articles />
              </Route>
              <Route path="/vendors">
                <Vendors />
              </Route>
              <Route path="/product-categories">
                <ProductCategories />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
