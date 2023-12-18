export type TParams = {
  width: number,
  height: number,
  weight: number
}

export type TDetails = [
  title: string,
  params: TParams
]

export type TProj = [
  name: string,
  details: TDetails[],
  mainEngineer: string,
  deadline: string,
]

export type TDeps = {
  tech: TProj,
  turbo: TProj,
  chemical: TProj

}