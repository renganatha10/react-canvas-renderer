import React from 'react';
//@ts-ignore
import renderCanvas from 'canvas-render/src';
import './App.css';

const CanvasComp: React.FC = () => {
  return (
    <canvas>
      <rect
        style={{
          backgroundColor: 'red',
          height: 100,
          width: 100,
          left: 10,
          top: 10,
        }}
      />
      <circle style={{ width: 100, top: 100, left: 500 }} />
      <text style={{ fontSize: 20, left: 100, top: 100 }}>Renga</text>
    </canvas>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    renderCanvas(
      //@ts-ignore
      <CanvasComp />,
      canvas
    );

    if (canvas) {
      // const ctx = canvas.getContext('2d');
      // // ctx && ctx.strokeStyle =  (0, 0, 100, 100);
    }
  }, []);

  return (
    <div className="App">
      <canvas id={'canvas'} height={1000} width={1000} />
    </div>
  );
};

export default App;
