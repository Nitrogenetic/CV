import { useMeteors } from "./hooks/useMeteors";

interface SkillsBlockMeteorsProps {
  currentScroll: number;
}

const SkillsBlockMeteors: React.FC<SkillsBlockMeteorsProps> = (props) => {
  const { currentScroll } = props;
  const { meteor1Style, meteor2Style, meteor3Style, meteor4Style, meteor5Style, meteor6Style } = useMeteors(currentScroll);

  return (
    <div className="">
      <img src={"images/meteor1.png"} className="fixed z-2 top-10vh w-3vw h-auto" style={meteor1Style} />
      <img src={"images/meteor2.png"} className="fixed z-2 top-70vh w-2vw h-auto" style={meteor2Style} />
      <img src={"images/meteor3.png"} className="fixed z-2 top-60vh w-4vw h-auto" style={meteor3Style} />
      <img src={"images/meteor4.png"} className="fixed z-2 top-40vh w-5vw h-auto" style={meteor4Style} />
      <img src={"images/meteor5.png"} className="fixed z-2 top-25vh w-4vw h-auto" style={meteor5Style} />
      <img src={"images/meteor1.png"} className="fixed z-2 top-20vh w-4vw h-auto" style={meteor6Style} />
    </div>
  );
};

export default SkillsBlockMeteors;
