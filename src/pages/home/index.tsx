import React, { memo } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  ContactBlock,
  HeaderBlock,
  ProjectsBlock,
  ProjectsBlockTitle,
  SkillsBlock,
  SkillsBlockTitle,
} from './components';
import { useWindowScroll, useWindowSize } from 'react-use';

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = () => {
  const { y: scroll } = useWindowScroll();
  const { height: screenHeight } = useWindowSize();
  // console.log('scroll: ', scroll);

  return (
    <div className="h-1000vh">
      <HeaderBlock scroll={scroll} screenHeight={screenHeight} />
      <SkillsBlockTitle scroll={scroll} screenHeight={screenHeight} />
      <SkillsBlock scroll={scroll} screenHeight={screenHeight} />
      {/* Information and projects */}
      <ProjectsBlockTitle scroll={scroll} screenHeight={screenHeight} />
      <ProjectsBlock scroll={scroll} screenHeight={screenHeight} />
      {/* <ContactBlock /> */}
    </div>
  );
};

export default memo(Home);
