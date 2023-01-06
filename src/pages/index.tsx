import { RouteComponentProps, Router } from '@reach/router';
import React, { FC, memo } from 'react';

import NotFound from './404';
import Home from './home';

const IndexPage: FC<RouteComponentProps> = () => {
  return (
    <Router className={'router screen-flex'}>
      <Home path={'/'} />

      <NotFound default />
    </Router>
  );
};

export default memo(IndexPage);
