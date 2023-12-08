/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead
 */
function swap(a,b){
    let temp = a;
    a = b;
    b = a;

    return [a,b];
}


var rotate = function(matrix) {

    let len = matrix.length;

    for(let i = 0; i < len - 1; i++){
        for(let j = i+2; j < len; j++ ){
             [matrix[i][j], matrix[j][i]] = swap(matrix[j][i], matrix[i][j]);
        }
    }

    for(let i = 0 ; i < len ; i++){
         matrix[i].reverse(); 
    }

    return matrix;
    
}; 