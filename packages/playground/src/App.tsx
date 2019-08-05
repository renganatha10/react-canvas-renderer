import React from 'react';

//@ts-ignore
import canverRender from 'canvas-render';
import './App.css';

const { Circle, Rect, Text, Container } = canverRender;

const rectangle = () => {
  return {
    something: () => {},
  };
};

class CanvasComp extends React.PureComponent<{}, { timer: number }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  public componentDidMount() {
    // setInterval(() => {
    //   this.setState({ timer: this.state.timer + 1 });
    // }, 1000);
  }

  render() {
    console.log(this.state.timer);
    return (
      <Container>
        <Rect height={100} width={100} left={100} top={100} fill={'red'} />
        {/* {this.state.timer === 10 ? (
          <Circle radius={100} top={100} left={500} />
        ) : (
          <Circle radius={100} top={100} left={200} />
        )}
        {this.state.timer === 2 ? (
          <Circle radius={100} top={100} left={500} />
        ) : (
          <Text fontSize={20} left={100} top={100}>
            Renga
          </Text>
        )} */}
      </Container>
    );
  }
}

const App: React.FC = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canverRender.render(<CanvasComp />, canvas);
  }, []);

  const onclick = async () => {
    try {
      //@ts-ignore
      const device = await window.navigator.usb.requestDevice({
        filters: [],
      });

      await device.open();
      await device.selectConfiguration(1);

      console.log(device.configuration.interfaces);
      console.log('open', device);

      await device.claimInterface(1);
      // await device.claimInterface(0);
      // await device.controlTransferOut({
      //   requestType: 'class',
      //   recipient: 'interface',
      //   request: 0x22,
      //   value: 0x01,
      //   index: 0x02,
      // });

      let encoder = new TextEncoder();
      let string_data = 'i am here';
      const data = encoder.encode(string_data).buffer;
      await device.transferOut(2, data);
      const result = await device.transferIn(3, 64);
      // console.log(result, 'REsult');
    } catch (error) {
      console.log(error, 'errr');
    }
  };

  return (
    <div className="App">
      {/* <button onClick={onclick}> click me </button> */}
      <canvas id={'canvas'} height={1000} width={1000} />
    </div>
  );
};

export default App;
