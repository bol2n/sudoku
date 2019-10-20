module.exports = function solveSudoku(matrix) {

					//check candidate
					const checkNum = (array, row, col, num) => {
						for (let i = 0; i < 9; i++) {
							let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
							let n = 3 * Math.floor(col / 3) + i % 3;
							//check candidate in row, column, square
							if (array[row][i] == num || array[i][col] == num || array[m][n] == num) {
								return false;
							}
						}
						return true;
					}

					//solve matrix
					const matrixSolv = (arr) => {
						//select row
						for (let i = 0; i < 9; i++) {
							//select column
							for (let j = 0; j < 9; j++) {
								//when we have zero
								if (arr[i][j] == 0) {
									//determine candidate
									for (let k = 1; k <= 9; k++) {
										//check candidate
										if (checkNum(arr, i, j, k) == true) {
											arr[i][j] = k;
											if (matrixSolv(arr) == true) {
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
