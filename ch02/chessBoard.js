size = 8;

chessBoard = "";
for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
        if ((i + j) % 2 == 0){
            chessBoard += " ";
        }
        else{
            chessBoard +="#";
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);