class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      console.log(this.first.value);
    }
    enqueue(value){
      const newNode = new Node(value);
      if (this.length === 0){
        this.first = newNode;
        this.last = newNode;
      }
      else{
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
    }
    dequeue(){
      if (this.length == 0){
        return null
      }
      if(this.first == this.last){
        this.last = null;
      }
      console.log("Dequeued Item: "+this.first.value);
      this.first = this.first.next;
      this.length--;
    }
    printQueue(){
      let temp = this.first;
      console.log("Items:");
      while(temp != null){
        console.log("<-- "+temp.value);
        temp = temp.next;
      }
  
    }
  }
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.printQueue();
  myQueue.dequeue();
  myQueue.printQueue();
  myQueue.enqueue("Samir");
  myQueue.enqueue("Maansi");
  myQueue.printQueue();
  myQueue.dequeue();
  myQueue.printQueue();