/*
    note
    from
    [0][0], [0][1], [0][2]
    [1][0], [1][1], [1][2]
    [2][0], [2][1], [2][2]
    
    to
    [0][0], [1][0], [2][0]
    [0][1], [1][1], [2][1],
    [0][2], [1][2], [2][2]
*/

function transpose(matrix: number[][]): number[][] {
    let res: number[][];
    res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!res[j]) res[j] = [];
            res[j][i] = matrix[i][j];
        }
    }
    return res;
};
