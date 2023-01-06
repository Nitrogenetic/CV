import React, { memo } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { HeaderBlock, SkillsBlock, SkillsBlockTitle } from './components';
import { useWindowScroll, useWindowSize } from 'react-use';

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = () => {
  const { y: scroll } = useWindowScroll();
  const { height: screenHeight } = useWindowSize();
  // console.log('scroll: ', scroll);

  return (
    <div className="h-700vh">
      <HeaderBlock scroll={scroll} screenHeight={screenHeight} />
      <SkillsBlockTitle scroll={scroll} screenHeight={screenHeight} />
      <SkillsBlock scroll={scroll} screenHeight={screenHeight} />
    </div>
  );
};

export default memo(Home);
