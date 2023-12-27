import React, { useState } from 'react';
import Image from './Image';

const ToggleImageApp = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prevValue) => !prevValue);
  };

  return (
    <div>
      <h1>Image Toggle App</h1>
      <div onClick={toggleImage} style={{ cursor: 'pointer' }}>
        {isImage1Visible ? (
          <Image src="https://www.dailypaws.com/thmb/JJtypZT4cIHIU22yvcnqBgQ9PNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/celebrity-dog-names-203263902-2000-d68c5d9ba1bf49b58a2cb124842da94f.jpg" alt="Image 1" />
        ) : (
          <Image src="https://i.pinimg.com/736x/32/96/c1/3296c1b85316b4b738644455887820d5.jpg" alt="Image 2" />
        )}
      </div>
    </div>
  );
};

export default ToggleImageApp;
