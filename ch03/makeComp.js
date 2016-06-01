function makeString(target){
  function helper(start, history){
    if (start === target)
      return history;
    else if (start > target)
      return null;
    else
      return helper(start + 5, "(" + history + " + 5)") ||
             helper(start * 3, "(" + history + " * 3)");
  }
  return helper(1, "1") || "Sorry, no way such path.";
}

console.log(makeString(1));
console.log(makeString(14));
console.log(makeString(26));
console.log(makeString(25));
