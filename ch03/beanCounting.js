function countChar(aString, aChar){
    var charCount = 0
    for (var i = 0; i < aString.length; i++){
        if (aString.charAt(i) === aChar){
            charCount += 1;
        }
    }
    return charCount;
}

function countBs(aString){
    return countChar(aString, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));