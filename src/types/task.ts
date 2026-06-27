export interface Task {
  _id: string;
  title: string;
  description: string;
  reward: number;
  type:
    | "social"
    | "website"
    | "ads";
  buttonText: string;
}