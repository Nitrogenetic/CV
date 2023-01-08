import React, { memo, useState } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import {
  ContactBlock,
  ContactBlockTitle,
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

  const [projectsBlockHeight, setProjectsBlockHeight] = useState<number>();

  // console.log('scroll: ', scroll);

  return (
    <div className="h-1600vh">
      <HeaderBlock scroll={scroll} screenHeight={screenHeight} />

      <SkillsBlockTitle scroll={scroll} screenHeight={screenHeight} />
      <SkillsBlock scroll={scroll} screenHeight={screenHeight} />

      <ProjectsBlockTitle scroll={scroll} screenHeight={screenHeight} />
      <ProjectsBlock
        scroll={scroll}
        screenHeight={screenHeight}
        setProjectsBlockHeight={(value) => setProjectsBlockHeight(value)}
      />

      <ContactBlockTitle
        scroll={scroll}
        screenHeight={screenHeight}
        prevBlockHeight={projectsBlockHeight || 0}
      />
      <ContactBlock />
    </div>
  );
};

export default memo(Home);
