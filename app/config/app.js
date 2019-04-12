import React from 'react';

import News from '../components/News';
import Used from '../components/Used';

const app = {
  modules: {
    news: {
      template: <News />,
    },
    used: {
      template: <Used />,
    },
  },
  navigation: {
    Home: {
      label: 'HOME',
      path: '/',
    },
    News: {
      label: 'NEWS',
      path: '/news',
    },
    Used: {
      label: 'USED',
      path: '/used',
    },
  },
};

export default app;
