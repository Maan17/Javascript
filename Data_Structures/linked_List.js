class Node{
  constructor(value){
    this.value = value,
    this.next = null
  }
}
class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
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
    let temp = this.traverseToIndex(index)
    newNode.next = temp.next;
    temp.next = newNode;
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
    let next = temp.next.next;
    temp.next.next = null;
    temp.next = next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(16);
myLinkedList.insert(1,30);
console.log(myLinkedList.printList())
myLinkedList.remove(5);
console.log(myLinkedList.printList())