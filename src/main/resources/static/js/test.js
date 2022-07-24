  $(document).ready(function () {
   console.log(createStack("hola**pao**"));
  });  

  function createStack(param){
    let stack = param.split("");
    for (let i = 0; i < stack.length; i++) {
      if(stack[i]=="*"){
        console.log(stack);
         stack.splice(i-1,2);
          stack = createStack(stack.join(""));
          break;
      }
               
    }
    return stack;
}


