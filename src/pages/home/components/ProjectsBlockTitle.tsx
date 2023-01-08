import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import cls from 'classnames';
import { SelfPrintingPhrase } from '../../../elements/ux/SelfPrintingPhrase';

interface ProjectsBlockTitleProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
}

const ProjectsBlockTitle: React.FC<ProjectsBlockTitleProps> = (props) => {
  const { scroll, screenHeight } = props;
  const currentScroll = scroll - screenHeight * 6 + 1;
  const position = currentScroll >= 0 ? 'fixed' : 'relative';
  const top = currentScroll >= 0 ? 0 : '';

  return (
    <div
      className="h-screen w-screen z-3 top-600vh bg-white cursor-auto"
      style={{ position, top }}
    >
      <div className="text-4vw font-bold absolute-center whitespace-nowrap">
        <SelfPrintingPhrase
          string="const myPastProjects = () = > {"
          howMuchFullScreensAnimationTakes={2}
          screenHeight={screenHeight}
          scrollY={currentScroll}
          isTerminalSticks
        />
      </div>
    </div>
  );
};

export default memo(ProjectsBlockTitle);
