import { Component } from "react";

interface PropsInterface {
  label: string;
}

interface StateInterface {
  color: string;
}

class ClassComponent extends Component<PropsInterface, StateInterface> {
  constructor(props: any) {
    super(props);
    this.state = { color: "red" };

    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  // ** custom methods
  handleToggleColor() {
    this.setState((prevState: { color: string }) => ({
      ...prevState,
      color: prevState.color === "red" ? "blue" : "red",
    }));
  }

  /* Lifecycle Methods */
  componentDidMount() {}
  // ** useEffect(() => {}, [])
  componentWillUnmount() {}
  // ** useEffect(() => {return () => {cleanup code that work for will unmount}}, [])
  componentDidUpdate(prevProps: Readonly<PropsInterface>, prevState: Readonly<StateInterface>, snapshot?: any): void {}
  // ** useEffect(() => {})
  render() {
    const { color } = this.state;
    const { label } = this.props;
    const nextColor = color === "red" ? "blue" : "red";

    return (
      <div>
        <h1>{label}</h1>
        <button style={{ backgroundColor: color, color: "white" }} onClick={this.handleToggleColor}>
          click for change button to <b>{nextColor}</b> color
        </button>
      </div>
    );
  }
}

export default ClassComponent;
