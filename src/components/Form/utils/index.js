import Query from './query';

export const validateRule = (selection, rule) => {
  return Boolean(Query.query([selection], rule).length);
};
