export const isObject = (value) => typeof value === 'object' || value === null || value === undefined;

export const checkObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
