import React, { useState, useEffect } from 'react';

function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return <div>{`현재 화면의 넓이는 ${width} 입니다...!`}</div>
}

export default WidthPrinter;