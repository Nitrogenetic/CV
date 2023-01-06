import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import cls from 'classnames';

interface SkillsBlockProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
}

const SkillsBlock: React.FC<SkillsBlockProps> = (props) => {
  const { scroll, screenHeight } = props;
  const currentScroll = scroll - screenHeight * 4;
  const opacity = currentScroll / screenHeight + 1;
  const display = currentScroll / screenHeight <= -1 ? 'none' : '';
  // console.log('currentScroll: ', currentScroll);
  const position = currentScroll >= 0 ? 'relative' : '';
  const top = currentScroll >= 0 ? '000vh' : '';

  return (
    <>
      <div
        className="h-screen w-screen fixed z-1 bg-meteors bg-no-repeat bg-cover bg-center cursor-auto"
        style={{ opacity, display }}
      />
      <div className="h-screen w-screen absolute z-1 top-500vh px-2vw cursor-auto">
        <div className="flex justify-between text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl mb-5vw">
          <div className="flex flex-col">
            <p className="underline">Languages</p>
            <p>Typescript</p>
            <p>JS ES6</p>
            <p>Html</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>PHP</p>
          </div>
          <div className="flex flex-col">
            <p className="underline">Query languages</p>
            <p>Postgresql</p>
            <p>SQL</p>
          </div>
          <div className="flex flex-col">
            <p className="underline">Frameworks / Libraries</p>
            <p>React</p>
            <p>Vuejs 3.0</p>
            <p>Gatsby</p>
            <p>Apollo graphql</p>
            <p>Tailwind</p>
            <p>Windy</p>
            <p>jQuery</p>
          </div>
          <div className="flex flex-col">
            <p className="underline">Compiler</p>
            <p>Node.js</p>
          </div>
          <div className="flex flex-col">
            <p className="underline">Builders</p>
            <p>Vite Webpack</p>
          </div>
        </div>
        <div className="text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl">
          <p className="underline">Other knowledge</p>
        </div>
      </div>
    </>
  );
};

export default memo(SkillsBlock);
