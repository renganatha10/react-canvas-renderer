import React from 'react';

//@ts-ignore
import canverRender from 'canvas-render';
import './App.css';

const { Circle, Rect, Text, Container } = canverRender;

const CanvasComp: React.FC = () => {
  return (
    <Container>
      <Rect height={100} width={100} left={100} top={100} fill={'red'} />
      <Circle radius={100} top={100} left={500} />
      <Text fontSize={20} left={100} top={100}>
        Renga
      </Text>
    </Container>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canverRender.render(<CanvasComp />, canvas);
  }, []);

  return (
    <div className="App">
      <canvas id={'canvas'} height={1000} width={1000} />
    </div>
  );
};

export default App;
