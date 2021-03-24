import logo from './logo.svg';
import './App.css';
import React from 'react';

class CanvasExample extends React.Component {

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  draw = () => {
    const ctx = this.canvas.current.getContext("2d");
    const {size, rectanglesCount} = this.props;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "rgba(0, 150, 0, 0.2)"
    for(let i = 0; i < rectanglesCount; i++) {
      const reactSize = (size * (i + 1.0)) / rectanglesCount;
      ctx.fillRect(0, 0, reactSize, reactSize);
    }
  }

  componentDidMount() {
    this.draw();
  }

  render() {
    const {size} = this.props;
    return (
      <canvas ref = {this.canvas} style = {{border: "1px solid gray"}} width = {size} height = {size} />
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello Canvas!</h1>
      <CanvasExample size = "300" rectanglesCount = {10}/>
    </div>
  );
}

export default App;
