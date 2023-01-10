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
  const { height: screenHeight, width: screenWidth } = useWindowSize();
  const isMobile = screenWidth <= 576;
  const [projectsBlockHeight, setProjectsBlockHeight] = useState<number>();

  if (isMobile) {
    return (
      <div className="bg white absolute-center text-center w-full">
        Oh no... <br />
        My resume is only available for the desktop version so far <br />
        But I'm already working on a mobile version
      </div>
    );
  }

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
