import RobotForm from "./components/RobotForm/RobotForm";
import RobotList from "./components/RobotList/RobotList";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <h1 className="app__title">Your selected robots:</h1>
      <RobotList></RobotList>
      <RobotForm />
    </div>
  );
};

export default App;
