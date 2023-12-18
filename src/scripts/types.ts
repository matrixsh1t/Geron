export type TSeason = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
};

export type seasonList = {
  winter: TSeason;
  summer: TSeason;
  autumn: TSeason;
  spring: TSeason;
};

export type TEmployee = {
  name: string;
  departament: string;
  experience: number;
  isClosedProjects: boolean;
  salary: number;
};

export type TDepAndEmplNum = {
  title: string;
  employees: number;
};
