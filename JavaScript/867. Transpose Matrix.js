/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    let len = matrix.length;
    let hor_len = matrix[0].length;

    
    let res = new Array(hor_len).fill(0).map(() => new Array(len).fill(0));

    for(let i = 0; i < len; i++){
        for(let j = 0; j < hor_len; j++ ){
            res[j][i] = matrix[i][j];
        }
    }

    return res;
};