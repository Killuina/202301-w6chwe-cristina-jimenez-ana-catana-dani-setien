export interface RobotAttributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotStructure {
  id: string;
  name: string;
  image: string;
  attributes: RobotAttributes;
}

export type Robots = RobotStructure[];

export interface ApiResponseStructure {
  robots: Robots;
}
