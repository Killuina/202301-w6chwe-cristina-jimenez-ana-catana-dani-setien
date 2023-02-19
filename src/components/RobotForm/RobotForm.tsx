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
    <>
      <h3 className="form-title">New Robot: </h3>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={nameValue}
          placeholder="name"
          required
        ></input>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          id="image"
          onChange={handleImageChange}
          value={imageValue}
          placeholder="image url"
          required
        ></input>
        <label htmlFor="speed">Speed: </label>
        <input
          type="text"
          id="speed"
          onChange={handleSpeedChange}
          value={speedValue}
          placeholder="speed"
          required
        ></input>
        <label htmlFor="resistance">Resistance: </label>
        <input
          type="text"
          id="resistance"
          onChange={handleResistanceChange}
          value={resistanceValue}
          placeholder="resistance"
          required
        ></input>
        <button type="submit" className="form__button">
          Add robot
        </button>
      </form>
    </>
  );
};

export default RobotForm;
