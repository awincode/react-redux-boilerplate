import React from 'react';

import News from './TNews';
import Used from './TUsed';

const app = {
  modules: {
    news: {
      template: <News />
    },
    used: {
      template: <Used />
    }
  },
  navigation: {
    Home: {
      label: 'HOME',
      path: '/'
    },
    News: {
      label: 'NEWS',
      path: '/news'
    },
    Used: {
      label: 'USED',
      path: '/used'
    }
  }

};

export default app;
