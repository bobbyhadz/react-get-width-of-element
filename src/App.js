import './App.css';

import {useLayoutEffect, useRef, useState} from 'react';

export default function App() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <div ref={ref}>
      <h2>Width: {width}</h2>

      <h2>Height: {height}</h2>
    </div>
  );
}
