// ?? HOC patterns
// ** Pass reusable logic down as props to components throughout your application

// ** Say that we always wanted to add a certain styling to multiple components
// ** in our application. Instead of creating a style object locally each time,
// ** we can simply create a HOC that adds the style objects to the component
// ** that we pass to it
const withStyle = (Component) => {
  const styles = { backgroundColor: "red" };
  return (props) => <Component {...props} {...styles} />;
};

const Button = () => <button>click me</button>
const Text = () => <span>i am a text</span>

const ButtonWithStyle = withStyle(Button)
const TextWithStyle = withStyle(Text)

// !! we can replace the HOC pattern with React Hooks.

