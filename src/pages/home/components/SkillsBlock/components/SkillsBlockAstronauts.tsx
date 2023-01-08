// import astronaut1 from '../../../../../assets/images/astronaut1.png';
// import astronaut2 from '../../../../../assets/images/astronaut2.png';
// import astronaut3 from '../../../../../assets/images/astronaut3.png';
// import astronaut4 from '../../../../../assets/images/astronaut4.png';
// import astronaut5 from '../../../../../assets/images/astronaut5.png';

interface SkillsBlockAstronautsProps {
  type?:
    | 'languages'
    | 'query-languages'
    | 'frameworks'
    | 'compiler'
    | 'builders'
    | 'other';
}

const SkillsBlockAstronauts: React.FC<SkillsBlockAstronautsProps> = (props) => {
  const { type } = props;

  switch (type) {
    case 'languages':
      return (
        <div className="fixed top-100vh left-30vw transform duration-700">
          <div className="w-30vw h-30vw z-1 bg-white rounded-10 relative z-0 pl-5vw flex flex-col justify-center text-4vw text-black">
            <p>Typescript</p>
            <p>Javascript</p>
            <p>Html</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>PHP</p>
          </div>
          <img
            src={'images/astronaut1.png'}
            className="w-20vw h-auto absolute top-25vw right-25vw z-1"
          />
        </div>
      );
    case 'query-languages':
      return (
        <div className="fixed top-30vh left-100vw transform duration-700">
          <div className="w-30vw h-15vw z-1 bg-white rounded-10 relative z-0 pl-5vw flex flex-col justify-center text-4vw text-black">
            <p>Postgresql</p>
            <p>SQL</p>
          </div>
          <img
            src={'images/astronaut2.png'}
            className="bg-red-00 w-20vw h-auto absolute top-4vw left-29.2vw z-1"
          />
        </div>
      );
    case 'frameworks':
      return (
        <div className="fixed top-15vh right-100vw transform duration-700">
          <div className="w-25vw h-37vw z-1 bg-white rounded-10 relative z-1 pl-5vw flex flex-col justify-center text-4vw text-black">
            <p>React</p>
            <p>Vuejs 3.0</p>
            <p>Gatsby</p>
            <p>Apollo graphql</p>
            <p>Tailwind</p>
            <p>Windy</p>
            <p>jQuery</p>
          </div>
          <img
            src={'images/astronaut4.png'}
            className="bg-red-00 w-20vw h-auto absolute top-12vw right-21.5vw z-0"
          />
        </div>
      );
    case 'compiler':
      return (
        <div className="fixed top-100vh right-35vw transform duration-700">
          <div className="w-25vw h-7vw z-1 bg-white rounded-10 relative z-0 pl-5vw flex flex-col justify-center text-4vw text-black">
            <p>Node.js</p>
          </div>
          <img
            src={'images/astronaut3.png'}
            className="bg-red-00 w-20vw h-auto absolute top-1.5vw left-7vw z-1"
          />
        </div>
      );
    case 'builders':
      return (
        <div className="fixed top-60vh right-100vw transform duration-700">
          <div className="w-30vw h-12vw z-1 bg-white rounded-10 relative z-0 pl-5vw flex flex-col justify-center text-4vw text-black">
            <p>Webpack</p>
            <p>Vite</p>
          </div>
          <img
            src={'images/astronaut5.png'}
            className="bg-red-00 w-20vw h-auto absolute top-0vw right-25.5vw z-1"
          />
        </div>
      );
  }

  return <></>;
};

export default SkillsBlockAstronauts;
