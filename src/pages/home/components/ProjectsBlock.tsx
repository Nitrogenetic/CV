// import codeFalco from 'public/images/code-falco.png';
// import codeTvc from 'public/images/code-tvc.png';
// import codeHomecooks from 'public/images/code-homecooks.png';
// import codeCoffee from 'public/images/code-coffee.png';
// import codeBrightlab from 'public/images/code-brightlab.png';

import React, { memo, useEffect, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';

interface ProjectsBlockProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
  setProjectsBlockHeight(value: number): void;
}

const ProjectsBlock: React.FC<ProjectsBlockProps> = (props) => {
  const { scroll, screenHeight, setProjectsBlockHeight } = props;
  const currentScroll = scroll - screenHeight * 9;
  const screenStep = currentScroll / screenHeight;
  const opacity = screenStep + 1;
  const projectsBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    projectsBlockRef?.current &&
      setProjectsBlockHeight(projectsBlockRef.current.offsetHeight);
  }, [projectsBlockRef, scroll]);
  // }, [projectsBlockRef]); //если лагает раскоментить

  return (
    <div
      className="h-fit max-w-full w-screen relative z-3 top-800vh pt-200vh bg-white cursor-auto overflow-hidden"
      ref={projectsBlockRef}
      style={{ opacity }}
    >
      <div className="pl-10vw pr-3vw grid grid-cols-2 gap-x-7vw text-3vw text-center mb-7vw">
        <p>Description</p>
        <p>My code examples</p>
      </div>

      <p className="projects-running-string1 mb-7vw">
        Projects I have been involved in &mdash; Projects I have been involved
        in &mdash; Projects I have been involved in &mdash;
      </p>
      <div className="pl-10vw pr-3vw grid grid-cols-2 gap-x-7vw text-1.5vw leading-2vw items-center mb-7vw">
        <p className="py-4vw border-t-2 border-black">
          <a
            className="text-blue-400 hover:text-red-500 !cursor-pointer"
            href="https://sessions.mural.co/"
            target="_blank"
          >
            Falco
          </a>{' '}
          - the Mural company streaming service project. I started working on
          Falco in October 2021 while working on other projects as well. At the
          end of September 2022, I was assigned another project, so my work on
          Falco was abandoned. But the project continues to develop to this day.
          A full release has not been launched yet.
        </p>
        <img
          src={'images/code-falco.png'}
          className="w-full h-auto rounded-1vw"
        />

        <p className="py-4vw border-t-2 border-black">
          TVC (employees only) - an internal media storage site for employees of
          the TVC channel, where they can download and view video materials for
          their TV shows. I worked with TVC in parallel with Falco. Started in
          September 2021, transferred the project to another developer at the
          end of June 2022.
        </p>
        <img
          src={'images/code-tvc.png'}
          className="w-full h-auto rounded-1vw"
        />

        <p className="py-4vw border-y-2 border-black">
          <a
            className="text-blue-400 hover:text-red-500 !cursor-pointer"
            href="https://homecooksfoodhall.co.uk/"
            target="_blank"
          >
            HomeCooks
          </a>{' '}
          - British project from which I started my career in the last company.
          HomeCooks is a website where you can order meals from London's chefs
          with home delivery. I worked on building the site from July to
          November 2021.
        </p>
        <img
          src={'images/code-homecooks.png'}
          className="w-full h-auto rounded-1vw"
        />
      </div>
      <p className="projects-running-string2 mb-7vw">
        Projects in which I made my own decisions &mdash; Projects in which I
        made my own decisions &mdash; Projects in which I made my own decisions
        &mdash;
      </p>

      <div className="pl-10vw pr-3vw grid grid-cols-2 gap-x-7vw text-1.5vw leading-2vw items-center mb-7vw">
        <p className="py-4vw border-t-2 border-black">
          CoffeBright - site of a coffee shop that belonged to the previous
          company. I started working on it around september 2021, the last
          changes I made were in january 2022. The website domain is currently
          invalid for an unknown reason.
        </p>
        <img
          src={'images/code-coffee.png'}
          className="w-full h-auto rounded-1vw"
        />

        <p className="py-4vw border-y-2 border-black">
          <a
            className="text-blue-400 hover:text-red-500 !cursor-pointer"
            href="https://brightlab.me/"
            target="_blank"
          >
            BrigntLab
          </a>{' '}
          - landing and advertising site of my previous company. I worked on it
          when there were no tasks for major projects like Falco and TVC. I made
          changes periodically from March to December 2022.
        </p>
        <img
          src={'images/code-brightlab.png'}
          className="w-full h-auto rounded-1vw"
        />
      </div>
    </div>
  );
};

export default memo(ProjectsBlock);
