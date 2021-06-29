class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    
    // traversal is from top to bottom, not bottom to top
    // here top is holding reference of previous nodes
    push(value){
      const newNode = new Node(value)
      if(this.length === 0){
        this.bottom = newNode;
        this.top = newNode;
      }
      else{
        const prev = this.top;
        this.top = newNode;
        this.top.next = prev;
      }
      this.length++ ;
    }
    pop(){
      if(!this.top){
        return null;
      }
      if(this.top === this.bottom){
        this.bottom = null;
      }
      console.log("Popped Item: " +this.top.value);
      this.top = this.top.next;
      this.length--;
    }
    printStack(){
      let temp = this.top;
      console.log("Current Stack: ");
      while(temp!= null){
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }
  
  const myStack = new Stack();
  myStack.push('I');
  myStack.push('S');
  myStack.push('N');
  myStack.push('A');
  myStack.push('A');
  myStack.push('M');
  myStack.printStack();
  myStack.pop();
  myStack.printStack();
  myStack.pop();