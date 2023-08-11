import { PROJECT_ENV } from 'enum/project';
export function listToTreeList<T>(
  list: T[],
  parentKey: string = 'parentId',
  idKey: string = 'id',
  childrenKey: string = 'childrenKey',
) {
  function exists(list, parentId) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][idKey] == parentId) return true;
    }
    return false;
  }

  let nodes = [];
  // get the top level nodes
  for (let i = 0; i < list.length; i++) {
    let row = list[i];
    if (!exists(list, row[parentKey])) {
      nodes.push(row);
    }
  }

  let toDo = [];
  for (let i = 0; i < nodes.length; i++) {
    toDo.push(nodes[i]);
  }
  while (toDo.length) {
    let node = toDo.shift(); // the parent node
    // get the children nodes
    for (let i = 0; i < list.length; i++) {
      let row = list[i];
      if (row[parentKey] == node[idKey]) {
        //var child = {id:row.id,text:row.name};
        if (node[childrenKey]) {
          node[childrenKey].push(row);
        } else {
          node[childrenKey] = [row];
        }
        toDo.push(row);
      }
    }
  }
  return nodes;
}

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

export const getCurrentEnvApiUrl = () => {
  let api = {
    [PROJECT_ENV.DEV]: `${process.env.BASIC_SERVER_API_URL}/${process.env.BASIC_API_URL_PREFIX}`,
    [PROJECT_ENV.DEV_LOCAL]: `${process.env.BASIC_LOCAL_API_URL}`,
    [PROJECT_ENV.DEV_SERVER]: `${process.env.BASIC_SERVER_API_URL}/${process.env.BASIC_API_URL_PREFIX}`,
    [PROJECT_ENV.PRO]: `${process.env.BASIC_SERVER_API_URL}/${process.env.BASIC_API_URL_PREFIX}`,
  };
  let defaultApi = `${api[PROJECT_ENV.PRO]}`;
  return api[process.env.ENV] || defaultApi;
};
