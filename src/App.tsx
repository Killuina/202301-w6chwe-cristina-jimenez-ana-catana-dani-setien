import RobotCard from "./components/robotCard/RobotCard";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <RobotCard
        robot={{
          id: "63efcf45e871c66135a96f55",
          name: "WALLE-E",
          image:
            "https://variety.com/wp-content/uploads/2022/09/Pixar-Wall-E.jpg?w=681&h=383&crop=1",
          attributes: { speed: 2, resistance: 3, creationDate: "2022/22" },
        }}
      />
    </div>
  );
};

export default App;
