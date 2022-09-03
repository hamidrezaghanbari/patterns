import { useState } from "react";

const RenderPropsPattern = () => {
  return (
    <div>
      {/* 
          A render prop is a prop on a component, which value is a function that returns a JSX element. 
          The component itself does not render anything besides the render prop. 
          Instead, the component simply calls the render prop, instead of implementing its own rendering logic.
      */}
      {/* 
          Although they're called render props, a render prop doesn't have to be called render. 
          Any prop that renders JSX is considered a render prop! Let's rename the render props
          that were used in the previous example, and give them specific names instead!
      */}
     
      <RenderPropsComponent render={(val: string) => <span>{val}</span>}>
        {(val: string) => <b>iran {val}</b>}
      </RenderPropsComponent>
    </div>
  );
};

interface Props {
  render: (val: string) => JSX.Element;
  children: (val: string) => JSX.Element;
}

const RenderPropsComponent = ({ render, children }: Props) => {
  const [val, setVal] = useState("");
  return (
    <div>
      <span>{render(val)}</span>
      {children(val)}
      <button onClick={() => setVal("click")}>click me</button>
    </div>
  );
};

export default RenderPropsPattern;
