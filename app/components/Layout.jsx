/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './Home';
import appConfig from '../config/app';

const renderModulePage = module => {
  const Component = module.template.type;
  return <Component />;
};

const Layout = props => {
  const [appStatus, useAppStatus] = useState(0);
  const { modules } = appConfig;

  return (
    <>
      <section className='section'>
        <div className='level'>
          <div id='sidebar' className='level-left'>
            <Sidebar />
          </div>
          <div id='main' className='level-right'>
            <div className='container'>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => <Home appStatus={appStatus} />}
                />
                {Object.keys(modules).map(module => (
                  <Route
                    key={module}
                    path={`/${module}`}
                    render={() => renderModulePage(modules[module])}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>A basic React Boilerplate</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
