export type TParams = {
  width: number;
  height: number;
  weight: number;
};

export type TDetail = {
  title: string;
  params: TParams;
};

export type TProject = {
  name: string;
  details: TDetail[];
  mainEngineer: string;
  deadline: string;
};

export type TDep = {
  tech: TProject[];
  turbo: TProject[];
  chemical: TProject[];
};

export type TResult = {
  projectName: string,
  detailName: string,
  detailPrice: number,
  projectBudget: number,
  devider: string
}