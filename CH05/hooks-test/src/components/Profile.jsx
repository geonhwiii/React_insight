import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return width;
}

function Profile() {
  const width = useWindowWidth();
  const [name, setName] = useState('');
  return (
    <div>
      <p>{`name is ${name}`}</p>
      {width < 600 && <br/>}
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default Profile;