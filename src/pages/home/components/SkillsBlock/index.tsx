import React, { memo } from "react";
import { RouteComponentProps } from "@reach/router";
import cls from "classnames";
import { SkillsBlockAstronauts, SkillsBlockMeteors } from "./components";
import AnimatedCursor from "react-animated-cursor";

interface SkillsBlockProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
}

const SkillsBlock: React.FC<SkillsBlockProps> = (props) => {
  const { scroll, screenHeight } = props;
  const currentScroll = scroll - screenHeight * 4;
  const screenStep = currentScroll / screenHeight;
  const opacity = screenStep + 1;
  const isHidden = screenStep <= -1 || screenStep > 2;
  const display = isHidden ? "none" : "";
  const backgroundImage = 'url("images/meteors.png")';
  const isCursorVisible = display !== "none";
  const cursorInnerStyle = {
    backgroundColor: "yellow",
    mixBlendMode: "difference",
    zIndex: 3,
  };
  const cursorOuterStyle = {
    backgroundColor: "lightblue",
    mixBlendMode: "difference",
    zIndex: 3,
  };

  return (
    <div style={{ opacity, display }}>
      {isCursorVisible && (
        <AnimatedCursor
          innerSize={"3vw"}
          innerStyle={cursorInnerStyle}
          outerSize={"15vw"}
          outerScale={4}
          innerScale={20}
          outerStyle={cursorOuterStyle}
        />
      )}
      <SkillsBlockMeteors currentScroll={currentScroll} />
      <div className="h-screen w-screen fixed z-1 bg-no-repeat bg-cover bg-center" style={{ backgroundImage }} />
      <div className="h-screen w-screen absolute z-3 top-500vh px-2vw overflow-x-hidden select-none" style={{ display }}>
        <div className="flex justify-between mb-20vw">
          <div className="h-fit">
            <p className="px-1vw py-2vw text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl hover:(text-blue-100 sibling:-translate-y-90vh)">
              Languages
            </p>
            <SkillsBlockAstronauts type="languages" />
          </div>
          <div className="h-fit">
            <p className="px-1vw py-2vw text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl hover:(text-blue-100 sibling:-translate-x-50vw)">
              Query languages
            </p>
            <SkillsBlockAstronauts type="query-languages" />
          </div>
          <div className="h-fit">
            <p className="px-1vw py-2vw text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl hover:(text-blue-100 sibling:translate-x-40vw)">
              Frameworks / Libraries
            </p>
            <SkillsBlockAstronauts type="frameworks" />
          </div>
          <div className="flex flex-col">
            <p className="px-1vw py-2vw text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl hover:(text-blue-100 sibling:-translate-y-50vh)">
              Compiler
            </p>
            <SkillsBlockAstronauts type="compiler" />
          </div>
          <div className="flex flex-col">
            <p className="px-1vw py-2vw text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl hover:(text-blue-100 sibling:translate-x-50vw)">
              Builders
            </p>
            <SkillsBlockAstronauts type="builders" />
          </div>
        </div>

        <div className="border-1 border-dashed text-2.5vw text-[#ffffff] text-opacity-87 text-shadow-xl flex items-center hover:(children:opacity-100)">
          <p className="px-1vw py-2vw mr-7vw whitespace-nowrap">Other knowledge</p>
          <div className="transition-opacity duration-500 opacity-0">
            protocols, http, headers, git, npm, yarn, tokens, uuid, cache, websockets, queries, ajax post/get and more...
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SkillsBlock);
