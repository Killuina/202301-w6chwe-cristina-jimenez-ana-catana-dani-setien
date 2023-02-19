export interface RobotAttributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotStructure extends UnidentifiedRobotStructure {
  id: string;
}

export type Robots = RobotStructure[];

export interface ApiResponseStructure {
  robots: Robots;
}

export interface UnidentifiedRobotStructure {
  name: string;
  image: string;
  attributes: RobotAttributes;
}
