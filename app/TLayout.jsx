import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './TSidebar';
import Home from './THome';
import appConfig from './tAppConfig';

const renderModulePage = (module) => {
  const Component = module.template.type;
  return (<Component />);
}
const Layout = (props) => {
  const [appStatus, useAppStatus] = useState(0);
  const { modules } = appConfig;

  return (
    <>
      <div>
        <div id='sidebar'>
          <Sidebar />
        </div>
      </div>
      <div id='main'>
        <Switch>
          <Route exact path='/' render={() => <Home appStatus={appStatus} />} />
          { Object.keys(modules).map(module => 
              <Route 
                key={module}
                path={`/${module}`}
                render={() => renderModulePage(modules[module])}
              />
            )
          }
        </Switch>
      </div>
    </>
  )
};

export default Layout;