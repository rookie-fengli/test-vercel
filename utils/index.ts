import { PROJECT_ENV } from 'enum/project';

export const pushStr = (sourceStr: string, appendStr: string, symbol: string = ',') => {
  let sourceStrArr = sourceStr.split(symbol);
  sourceStrArr.push(appendStr);
  sourceStrArr = sourceStrArr.filter((item) => !!item);
  return sourceStrArr.join(symbol);
};
export const deleteStr = (sourceStr: string, deleteStr: string, symbol: string = ',') => {
  let sourceStrArr = sourceStr.split(symbol);
  let sourceStrResult = sourceStrArr.filter((item) => item !== deleteStr);
  return sourceStrResult.join(symbol);
};
