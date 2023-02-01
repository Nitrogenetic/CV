import React, { memo } from "react";
import { RouteComponentProps } from "@reach/router";
import AnimatedCursor from "react-animated-cursor";

interface HeaderBlockProps extends RouteComponentProps {
  scroll: number;
  screenHeight: number;
}

const HeaderBlock: React.FC<HeaderBlockProps> = (props) => {
  const { scroll, screenHeight } = props;
  const opacity = 1 - scroll / screenHeight;
  const isHidden = scroll / screenHeight >= 1;
  const display = isHidden ? "none" : "";
  const backgroundImage = 'url("images/background.png")';
  const isCursorVisible = display !== "none";
  const cursorInnerStyle = {
    backgroundColor: "white",
    mixBlendMode: "difference",
  };

  return (
    <div
      className="h-screen w-screen fixed z-10 bg-cover bg-no-repeat select-none cursor-none"
      style={{
        opacity,
        display,
        backgroundImage,
      }}
    >
      {isCursorVisible && <AnimatedCursor innerSize={"15vw"} outerSize={0} innerScale={4} innerStyle={cursorInnerStyle} />}
      <div className="absolute-center text-5vw text-[#ffffff] text-opacity-87 text-center text-shadow-xl">
        Vladislav Gorbach`s
        <br />
        CV
      </div>
    </div>
  );
};

export default memo(HeaderBlock);
