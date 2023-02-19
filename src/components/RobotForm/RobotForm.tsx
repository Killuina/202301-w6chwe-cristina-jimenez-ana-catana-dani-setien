import { useState } from "react";
import { UnidentifiedRobotStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

const RobotForm = (): JSX.Element => {
  const { addRobot } = useApi();

  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [speedValue, setSpeedValue] = useState("");
  const [resistanceValue, setResistanceValue] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageValue(event.target.value);
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedValue(event.target.value);
  };

  const handleResistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResistanceValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const creationDate = new Date().toDateString();

    const newRobot: UnidentifiedRobotStructure = {
      name: nameValue,
      image: imageValue,
      attributes: {
        speed: +speedValue,
        resistance: +resistanceValue,
        creationDate: creationDate,
      },
    };

    setNameValue("");
    setImageValue("");
    setSpeedValue("");
    setResistanceValue("");

    addRobot(newRobot);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="to-do">New Robot: </label>
      <input
        type="text"
        id="name"
        onChange={handleNameChange}
        value={nameValue}
        placeholder="Set a new task"
        required
      ></input>
      <input
        type="text"
        id="image"
        onChange={handleImageChange}
        value={imageValue}
        placeholder="Set a new task"
        required
      ></input>
      <input
        type="text"
        id="speed"
        onChange={handleSpeedChange}
        value={speedValue}
        placeholder="Set a new task"
        required
      ></input>
      <input
        type="text"
        id="resistance"
        onChange={handleResistanceChange}
        value={resistanceValue}
        placeholder="Set a new task"
        required
      ></input>
      <button type="submit" className="form__button">
        Add robot
      </button>
    </form>
  );
};

export default RobotForm;
