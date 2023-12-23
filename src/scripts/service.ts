
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
import { TDep, TDetail, TParams, TProject } from './types';

type TResult = {
  projectName: string,
  detailName: string,
  detailPrice: number,
  projectBudget: number,
  devider: string
}

export const getResult = () => {
  let projectName: string
  let detailName: string;
  let detailPrice: number;
  let projectBudget: number;

  Object.entries(dep).forEach(([k,v]) => {
    // deps
    projectName = k;
    console.log(k);
    console.log(v);
    let dep = v.forEach(element => {
      // projects
      projectName = element.name
      console.log(k);
      console.log(v);
      Object.entries(element).forEach(([k,v]) => {
        // details
        console.log(k);
        console.log(v);
        Object.entries(v).forEach(([k,v]) => {
          // params
          console.log(k);
          console.log(v);
          detailName = k;
          
          
        })
        
        
      })
      
    })
    
    
  })
  console.log(projectName, detailName, );
  
}