// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

const theMatrix = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

const printSpiral = (matrix) => {
    let matrixCopy = [...matrix];
    const n = matrixCopy[0].length;
    const m = matrixCopy.length;

    for (let i = 0; i < (m - 2); i++) {

        let topRow = (matrixCopy.splice(0,1))[0];
        
        topRow.forEach(item => {
            console.log(item)
        });

        matrixCopy.forEach(item => {
            const endNumber = item.pop();
            console.log(endNumber)
        });

        let bottomRow = matrixCopy.pop().reverse();

        bottomRow.forEach(item => {
            console.log(item)
        });

        let leftNumbers = [];

        matrixCopy.forEach(item => {
            leftNumbers.push(item.splice(0,1)[0])
        });

        let leftNumbersReversed = leftNumbers.reverse();

        leftNumbersReversed.forEach(item => {
            console.log(item);
        })
      }
}

printSpiral(theMatrix);