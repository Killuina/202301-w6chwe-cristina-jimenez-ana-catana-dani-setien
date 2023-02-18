export interface Attributes {
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface Robot {
  id: string;
  name: string;
  image: string;
  attributes: Attributes;
}

export type Robots = Robot[];

export interface ApiResponseStructure {
  robots: Robots;
}
