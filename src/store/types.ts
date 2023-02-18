export interface RobotStructure {
  name: string;
  image: string;
  attributs: RobotAttributes;
}

export interface RobotAttributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export type RobotsStructure = RobotStructure[];
