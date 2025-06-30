 export interface ITask  {
  id: string;
  title: string;
  description: string; // Corrected spelling from "desciption"
  duedate: string; // or Date if you plan to work with actual Date objects
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
};

