import { PROJECT_ENV } from 'enum/project';
export const basePath: string = '';
export const routerSuffix: string = process.env.ENV === PROJECT_ENV.EXPORT ? '.html' : '';
