function validSolution(board) {
    //we've received a 2D array

    let rubric = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }
    let total0s = 0;

    for (let i = 0; i < board.length; i++) {
        let rowRubric = { ...rubric }
        let columnRubric = { ...rubric }

        for (let j = 0; j < board.length; j++) {
            let rowValue = board[i][j]
            let columnValue = board[j][i];

            // console.log({ i }, { j })

            if (rowRubric[rowValue] !== 0) {
                console.log("false, duplicates in row")
                return false;
            }
            if (rowRubric[rowValue] == 0) {
                rowRubric[rowValue] += 1;
            }
            if (columnRubric[columnValue] !== 0) {
                console.log("false, duplicates in column")
                return false;
            }
            if (columnRubric[columnValue] == 0) {
                columnRubric[columnValue] += 1;
            }
            // console.log({ rowRubric }, { columnRubric })

            if (rowRubric[0] >= 1) {
                total0s += rowRubric[0]
                // console.log(total0s)
            }
        }
    }
    if (total0s > 1) {
        console.log("false, more than 1 zero")
        return false;
    }
    console.log("true")
    return true;
}

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]);

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 4, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 9, 0, 4, 8, 1, 1, 7, 9]]);

validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
[2, 3, 1, 5, 6, 4, 8, 9, 7],
[3, 1, 2, 6, 4, 5, 9, 7, 8],
[4, 5, 6, 7, 8, 9, 1, 2, 3],
[5, 6, 4, 8, 9, 7, 2, 3, 1],
[6, 4, 5, 9, 7, 8, 3, 1, 2],
[7, 8, 9, 1, 2, 3, 4, 5, 6],
[8, 9, 7, 2, 3, 1, 5, 6, 4],
[9, 7, 8, 3, 1, 2, 6, 4, 5]])