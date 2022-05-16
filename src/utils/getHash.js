export default () => 
location.hash
  .slice(1)
  .toLocaleLowerCase()
  .split('/')[1] || '/'