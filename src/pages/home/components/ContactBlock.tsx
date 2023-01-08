import React, { memo } from 'react';
import { RouteComponentProps } from '@reach/router';
import React3dEarth from 'react-3d-earth';

interface ContactBlockProps extends RouteComponentProps {}

const ContactBlock: React.FC<ContactBlockProps> = (props) => {
  return (
    <div className="h-screen w-screen relative top-1200vh z-2 cursor-auto">
      <div className="absolute z-1 w-full text-white p-5vw flex">
        <div className="text-1.5vw block mr-auto">
          <p className="text-2vw mb-10vw">
            Right now I live in Istanbul and ready to work remotely.
          </p>
          <div className="w-fit grid grid-cols-2 gap-2vw mb-2vw">
            <span className="mb-2vw">Name and Surname:</span>
            <span className="text-green-400">Vladislav Gorbach</span>

            <span className="mb-2vw">Current Location:</span>
            <span className="text-green-400">Istanbul</span>
          </div>

          <div className="flex items-center">
            <span className="mr-4vw">Personal Photo:</span>
            <img src="/static/images/vladislav.png" className="w-10vw" />
          </div>
        </div>

        <div className="flex flex-col text-1.5vw">
          <p className="text-2vw mb-10vw">Here are my contact details</p>
          <div className="w-fit grid grid-cols-2 gap-2vw">
            <span className="mr-2vw">Telegram link:</span>
            <a
              className="text-blue-500 !cursor-pointer"
              href="https://t.me/Vladislav_ILTS"
              target="_blank"
            >
              @Vladislav_ILTS
            </a>
            <span className="mr-2vw">Whats App link:</span>
            <a
              className="text-blue-500 !cursor-pointer"
              href="https://wa.me/+905360512154"
              target="_blank"
            >
              +90 536 051 21 54
            </a>
            <span className="mr-2vw">Linked In:</span>
            <a
              className="text-blue-500 !cursor-pointer"
              href="https://www.linkedin.com/in/vladislav-gorbach-251442261"
              target="_blank"
            >
              Vladislav Gorbach
            </a>
          </div>
        </div>
      </div>
      <React3dEarth
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: '0',
        }}
        config={{
          radius: 15,
          mobileRadius: 10,
          flagScale: 3,
          flagLat: 41.0036,
          flagLon: 28.5737,
          flagColor: 'red',
          dotColor: 'white',
          autoRotationSpeed: 0.15,
          draggingRotationSpeed: 3,
          // textureSrc: '/images/map.png',
        }}
      />
    </div>
  );
};

export default memo(ContactBlock);
