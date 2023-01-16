
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (matrix==undefined){
  return [];
}
let res=[];
  for (let item of matrix){
      
          if(matrix.indexOf(item)% 2 == 0){
              for (let j=0;j<item.length;j++){
                res.push(Number(item[j]))
              }
          } else if (matrix.indexOf(item)% 2 !== 0){
            let itemReversed = [];
            for (let y=item.length-1;y>=0;y--){
              res.push(Number(item[y]))
            }
          }
      
  }
  
return res;
}
