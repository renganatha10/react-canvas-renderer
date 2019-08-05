import React from 'react';

//@ts-ignore
import canverRender from 'canvas-render';
import './App.css';

const { Circle, Rect, Text, Container } = canverRender;

class CanvasComp extends React.PureComponent<{}, { timer: number }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  public componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <Container>
        <Rect height={100} width={100} left={100} top={100} fill={'red'} />
        {this.state.timer === 5 ? (
          <Circle radius={100} top={100} left={500} />
        ) : (
          <Circle radius={100} top={100} left={200} />
        )}
        {this.state.timer === 2 ? (
          <Text fontSize={20} left={100} top={100}>
            Renga
          </Text>
        ) : (
          <Circle radius={100} top={100} left={100} />
        )}
      </Container>
    );
  }
}

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
