function chessboard(n) {
    let row = ""
    for (let i = 1; i <= n; i++) {
      (i % 2 !== 0) 
        ? row += "⬛"
        : row += "⬜"
    }
    let board = ""
    for (let i = 1; i <= n; i++) {
      (i % 2 !== 0)
        ? board += row + "\n"
        : board += "⬜" + row.slice(0, n - 1) + "\n"
    }
    return board;
  }
  
  console.log(chessboard(8))
