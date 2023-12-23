
// Формула для расчета стоимости 1 детали:
// *(ширина* высоту) / вес * 150

// программа должна выводить промежуточные данные в виде:
// Название проекта
// Название детали - стоимость детали
// Общий бюджет на проект
// Разделитель - - - - -

// Названия отделов
// tech - Технический
// turbo - Турбинный цех
// chemical - Химические

// Финальным результатом должен быть следующий вывод в консоль:
// Название отдела - бюджет на отдел

// *бюджет на отдел рассчитывается в виде суммы бюджета всех проектов отдела

import { dep } from "./data";
import { TDep, TDetail, TParams, TProject, TResult } from './types';

const getProjectBudget = (project: TProject): number => {
  let projectBudget = 0;

  project.details.forEach((detail) => {
    const detailCost = detail.params.width * detail.params.height / detail.params.weight * 150
    projectBudget += detailCost;  
  });
  return projectBudget
}

const getDepBudget = () => {
  let departmentBudget = 0;

  Object.entries(dep).forEach(([department, projects]) => {
    console.log(`--- ${department} Dep ---`);
    projects.forEach((project) => {
      departmentBudget += getProjectBudget(project);
      
  })
  console.log(`Total Budget for ${department} Department: $${departmentBudget.toFixed(0)}`);
  console.log("- - - - -");
  departmentBudget = 0
  });
}

export const getResult = () => {
  let projectName: string
  let detailName: string;
  let detailPrice: number;
  let projectBudget: number;
  let result: TResult;

Object.entries(dep).forEach(([department, projects]) => {
  projects.forEach(project => {
    projectName = project.name
    project.details.forEach(detail => {
      detailName = detail.title
      Object.entries(detail).forEach(([title, params]) => {
        detailPrice = detail.params.width * detail.params.height / detail.params.weight * 150
        projectBudget = getProjectBudget(project)
      })
    
    result = {
      projectName: projectName,
      detailName: detailName,
      detailPrice: detailPrice,
      projectBudget: projectBudget,
      devider: "- - - - -"
    }
    //printout results
    console.log(result);
  })
  })
  //printout budget for each dep
  getDepBudget()
})}