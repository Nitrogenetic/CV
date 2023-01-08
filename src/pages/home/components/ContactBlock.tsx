import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import cls from 'classnames';

interface ContactBlockProps extends RouteComponentProps {}

const ContactBlock: React.FC<ContactBlockProps> = (props) => {
  return (
    <div className="h-screen w-screen absolute z-1 top-600vh bg-red-300 cursor-auto"></div>
  );
};

export default memo(ContactBlock);
