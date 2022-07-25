function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack=createStack();
  stack.push(10);
  console.log(stack.items);
  
  stack.push(5);
  console.log(stack.items);
  
  console.log(stack.pop());
  
  stack.items=[10,100,1000];
  console.log(stack.items);