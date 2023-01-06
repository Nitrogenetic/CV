import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';

interface NotFoundProps extends RouteComponentProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className={'mx-auto text-center'}>
      <h1>404: Not Found</h1>
      <p>Oops! it looks like you went into outer space... the sadness.</p>
    </div>
  );
};

export default memo(NotFound);
