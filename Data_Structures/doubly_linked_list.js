class Node{
    constructor(value){
      this.value = value,
      this.next = null,
      this.prev = null
    }
  }
  class DoublyLinkedList{
    constructor(value){
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value){
      const newNode = new Node(value)
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    
    prepend(value){
      const newNode = new Node(value)
      newNode.next = this.head
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  
    insert(index, value){
      if(index >= this.length){
        return this.append(value);
      }
      if (index === 0){
        return this.prepend(value);
      }
      const newNode = new Node(value)
      let temp = this.traverseToIndex(index);
      let next = temp.next.next;
      newNode.prev = temp;
      newNode.next = temp.next;
      temp.next = newNode;
      next.prev = temp;
      this.length++;
      return this;
    }
  
    traverseToIndex(index){
      let currentNode = this.head
      let counter = 0
      while(counter !== index-1){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index){
      let temp = this.traverseToIndex(index-1)
      if(temp.next.next!=null){
        let next = temp.next.next;
        next.prev = temp;
        temp.next = next;
      }
      else{
        temp.next  = null;
      }
      this.length--;
    }
  }
  
  const myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(15);
  myLinkedList.prepend(16);
  myLinkedList.insert(1,30);
  console.log(myLinkedList.printList())
  myLinkedList.remove(5);
  console.log(myLinkedList.printList())