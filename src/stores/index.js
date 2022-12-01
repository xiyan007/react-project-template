// https://rematchjs.org/docs/

import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import common from './common';
import counter from './counter';

// console.log(process.env.NODE_ENV);
const loading = createLoadingPlugin({});
const store = init({
  name: 'app',
  models: {
    common,
    counter,
  },
  redux: {
    // middlewares: process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? [] : [logger],
  },
  plugins: [loading],
});

export default store;
