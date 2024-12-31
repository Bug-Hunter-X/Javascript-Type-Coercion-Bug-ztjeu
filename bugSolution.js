function foo(a,b){
  if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
  }else{
    return String(a) + String(b);
  }
}
console.log(foo(2,3));//Expected Output:5
console.log(foo(2,"3"));//Expected Output:23
console.log(foo("2",3));//Expected Output:23
console.log(foo("2","3"));//Expected Output:23