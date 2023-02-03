export const determinantFunction = (url) => {
  if (url.includes('tovar_')) {
    return 'tovar';
  }
  if (url.includes('group_')) {
    return 'group';
  }
};
