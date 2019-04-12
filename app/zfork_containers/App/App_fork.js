/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'zfork_containers/HomePage/Loadable';
import FeaturePage from 'zfork_containers/FeaturePage/Loadable';
import NotFoundPage from 'zfork_containers/NotFoundPage/Loadable';
import Header from 'zfork_components/Header';
import Footer from 'zfork_components/Footer';
import './style.scss';

const App = () => (
  <div className='app-wrapper'>
    <Helmet
      titleTemplate='%s - React.js Boilerplate'
      defaultTitle='React.js Boilerplate'
    >
      <meta name='description' content='A React.js Boilerplate application' />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/features' component={FeaturePage} />
      <Route path='' component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
