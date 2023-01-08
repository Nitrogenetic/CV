import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import cls from 'classnames';
import { SelfPrintingPhrase } from '../../../elements/ux/SelfPrintingPhrase';

interface ProjectsBlockTitleProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
  prevBlockHeight: number;
}

const ProjectsBlockTitle: React.FC<ProjectsBlockTitleProps> = (props) => {
  const { scroll, screenHeight, prevBlockHeight } = props;
  const currentScroll = scroll - screenHeight * 8 - prevBlockHeight + 1;
  console.log('currentScroll: ', currentScroll);
  const opacity = 3 - currentScroll / screenHeight;
  const isHidden = currentScroll < 0 || currentScroll / screenHeight >= 3;
  const display = isHidden ? 'none' : '';

  return (
    <div
      className="h-screen w-screen fixed z-0 top-0 bg-white cursor-auto select-none"
      style={{ display, opacity }}
    >
      <div className="text-4vw font-bold absolute-center whitespace-nowrap">
        <SelfPrintingPhrase
          string="const myContacts = new Map()"
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
