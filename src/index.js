module.exports = function solveSudoku(matrix) {
    let arr = [1,2,3,4,5,6,7,8,9];
    let zeros = [];
    let candidat = [];
    for (let k = 0; k < matrix.length;) {
      for (let i = 0, sum = 0; i < matrix[0].length; i++) {
        if (matrix[k].indexOf(arr[i]) != -1) {

        }
        else {
          candidat.push(arr[i]);
        }
        sum += matrix[k][i];
        if (matrix[k][i] == 0) {
          zeros.push(i);
          let row = [matrix[0][i],matrix[1][i],matrix[2][i],matrix[3][i],
                    matrix[4][i],matrix[5][i],matrix[6][i],matrix[7][i],
                    matrix[8][i]];
          for (n = 0; n < candidat.length; n++) {
            if (row.indexOf(candidat[n]) != -1) {

            }
            else {
              matrix[k].splice(i, 1, candidat[n]);
            }
          }
        }
      }
    k++;
    return matrix;
}
}
