module.exports = function solveSudoku(matrix) {
//console.log(matrix);		

					const checkNum = (array, row, col, num) => {
						for (let i = 0; i < 9; i++) {
							let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
							let n = 3 * Math.floor(col / 3) + i % 3;
							if (array[row][i] == num || array[i][col] == num || array[m][n] == num) {
								return false;
							}
						}
						return true;
					}

					const matrixSolv = (arr) => {
						//select row
						for (let i = 0; i < 9; i++) {
							//select column
							for (let j = 0; j < 9; j++) {
								//when we have zero
								if (arr[i][j] == 0) {
									//determine the candidate
									for (let k = 1; k <= 9; k++) {
										if (checkNum(arr, i, j, k)) {
											arr[i][j] = k;
											if (matrixSolv(arr)) {
											return true;
											}
											else {
											arr[i][j] = 0;
											}
										}
									}
									return false;
								}
							}
						}
					return true;
					}

					//return complete matrix
					const solvedArr = (array) => {
						matrixSolv(array);
						return array;
					}

					return solvedArr(matrix);
}
