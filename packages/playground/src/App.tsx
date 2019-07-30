import React from 'react';
//@ts-ignore
import renderCanvas from 'canvas-render/src';
import './App.css';

const CanvasComp: React.FC = () => {
  return (
    //@ts-ignore

    <canvas>
      <rect
        style={{
          backgroundColor: 'tomato',
          height: 10,
          width: 10,
          left: 100,
        }}>
        dssds
      </rect>
    </canvas>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas');
    renderCanvas(
      //@ts-ignore
      <CanvasComp />,
      canvas
    );
  }, []);

  return (
    <div className="App">
      <canvas id={'canvas'} style={{ height: 1000, width: 1000 }} />
    </div>
  );
};

export default App;
