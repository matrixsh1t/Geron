
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
import { TDeps, TDetails, TParams, TProj } from './types';

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
    projectName = k;
    let dep = v.forEach(element => {
      projectName = element.name
      Object.entries(element).forEach(([k,v]) => {
        console.log(k);
        console.log(v);
        Object.entries(v).forEach(([k,v]) => {
          console.log(k);
          console.log(v);
          detailName = k;
          
          
        })
        
        
      })
      
    })
    
    
  })
  console.log(projectName, detailName, );
  
}