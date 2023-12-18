export type Shapes = "square" | "circle" | "hexagon"

export interface Page {
  id: number;
  title: string;
  icon: string;
  color: string;
  shape: Shapes;
}
