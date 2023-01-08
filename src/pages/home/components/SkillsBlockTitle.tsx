import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import { SelfPrintingPhrase } from '../../../elements/ux/SelfPrintingPhrase';

interface SkillsBlockTitleProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
}

const SkillsBlockTitle: React.FC<SkillsBlockTitleProps> = (props) => {
  const { scroll, screenHeight } = props;
  const currentScroll = scroll - screenHeight;
  const display = currentScroll / screenHeight >= 3 ? 'none' : '';

  return (
    <div
      className="h-screen w-screen fixed z-0 bg-white bg-cover bg-no-repeat cursor-auto select-none"
      style={{ display }}
    >
      <div className="text-4vw font-bold absolute-center whitespace-nowrap">
        <SelfPrintingPhrase
          string="const myPersonalSkills = () = > {}"
          howMuchFullScreensAnimationTakes={2}
          screenHeight={screenHeight}
          scrollY={currentScroll}
          isTerminalSticks
        />
      </div>
    </div>
  );
};

export default memo(SkillsBlockTitle);
