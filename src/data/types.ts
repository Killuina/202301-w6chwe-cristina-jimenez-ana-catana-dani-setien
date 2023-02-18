export interface RobotAttributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotStructute {
  id: string;
  name: string;
  image: string;
  attributes: RobotAttributes;
}

export type Robots = RobotStructute[];

export interface ApiResponseStructure {
  robots: Robots;
}
