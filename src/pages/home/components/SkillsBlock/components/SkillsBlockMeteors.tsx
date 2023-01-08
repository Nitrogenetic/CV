import meteor1 from '../../../../../assets/images/meteor1.png';
import meteor2 from '../../../../../assets/images/meteor2.png';
import meteor3 from '../../../../../assets/images/meteor3.png';
import meteor4 from '../../../../../assets/images/meteor4.png';
import meteor5 from '../../../../../assets/images/meteor5.png';
import meteor6 from '../../../../../assets/images/meteor6.png';

interface SkillsBlockMeteorsProps {
  currentScroll: number;
}

const SkillsBlockMeteors: React.FC<SkillsBlockMeteorsProps> = (props) => {
  const { currentScroll } = props;
  const meteor1Style = {
    transform: 'translate(' + (currentScroll / 10 - 10) + 'vw,0vw)',
  };
  const meteor2Style = {
    transform: 'translate(' + -(currentScroll / 7 - 50) + 'vw,0vw)',
  };
  const meteor3Style = {
    transform: 'translate(' + -(currentScroll / 10 - 110) + 'vw,0vw)',
  };
  const meteor4Style = {
    transform: 'translate(' + -(currentScroll / 5 - 110) + 'vw,0vw)',
  };
  const meteor5Style = {
    transform: 'translate(' + (currentScroll / 10 - 70) + 'vw,0vw)',
  };
  const meteor6Style = {
    transform: 'translate(' + -(currentScroll / 5 - 190) + 'vw,0vw)',
  };

  return (
    <div className="">
      <img
        src={meteor1}
        className="fixed z-2 top-10vh w-3vw h-auto"
        style={meteor1Style}
      />
      <img
        src={meteor2}
        className="fixed z-2 top-70vh w-2vw h-auto"
        style={meteor2Style}
      />
      <img
        src={meteor3}
        className="fixed z-2 top-60vh w-4vw h-auto"
        style={meteor3Style}
      />
      <img
        src={meteor4}
        className="fixed z-2 top-40vh w-5vw h-auto"
        style={meteor4Style}
      />
      <img
        src={meteor5}
        className="fixed z-2 top-25vh w-4vw h-auto"
        style={meteor5Style}
      />
      <img
        src={meteor1}
        className="fixed z-2 top-20vh w-4vw h-auto"
        style={meteor6Style}
      />
    </div>
  );
};

export default SkillsBlockMeteors;
