import { useState } from "react";

const LiftState = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      {/* 
          One way to make the users input available to both the Fahrenheit and Kelvin component 
          in the above example, we'd have to lift the state
      */}

      {/* 
          Although this is a valid solution, it can be tricky to lift state
          in larger applications with components that handle many children.
          Each state change could cause a re-render of all the children, even the ones 
          that don't handle the data, which could negatively affect the performance of your app.
      */}

      <h1>lift state up</h1>
      <Input value={value} handleChange={setValue} />
      <Body value={value} />
      <Footer value={value} />
    </div>
  );
};

const Input = ({ value, handleChange }: { value: string; handleChange: Function }) => {
  return <input value={value} onChange={(e) => handleChange(e.target.value)} />;
};

const Body = ({ value }: { value: string }) => <span>{value}</span>;
const Footer = ({ value }: { value: string }) => <span>{value}</span>;

export default LiftState;
