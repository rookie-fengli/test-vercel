export const apiPrefix = process.env.BASIC_API_URL_PREFIX || 'fightServer';
export const staticPreFix = process.env.BASIC_STATIC_URL || 'freeSpace';
export const apiPort = '';
export const mediaAutomationPort = '8999';
export const mediaAutomationPrefix = '/mediaApi';
export const apiUrl = '';
export const mediaAutomationUrl = 'http://116.63.154.133:8001/mediaApi';
export const getBlogUrl = (url: string) => `${apiPort}${apiPrefix}${url}`;
export const getMediaUrl = (url: string) => `:${mediaAutomationPort}${mediaAutomationPrefix}${url}`;
