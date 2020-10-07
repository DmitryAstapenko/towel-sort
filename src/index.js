module.exports = function towelSort (matrix) {
  return matrix 
    ? [].concat(...matrix.map((item, index) => {
      if (index % 2 === 0) {
        return item.sort((a, b) => a - b);
      } else {
        return item.sort((a, b) => b - a);
      }    
    }))
    : [];
}
