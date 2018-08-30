class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  

  insertBefore(newItem, existingItem){
    if(this.head === null){
      this.insertFirst(newItem);
    }
    let currNode = this.head;
    let prevNode = this.head;
    let nextNode = this.head;

    while(currNode.next.value !== existingItem.value) {
      currNode = currNode.next;
      nextNode = currNode.next.next;
      prevNode = currNode;
      if (currNode.next === null){
        console.log('item not found!');
        return;
      }  
    }
    currNode = new _Node(newItem, existingItem);
    existingItem.next = nextNode;
    prevNode.next = currNode;
  }


  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item
    while(currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

const main = function() {
  let sll = new linkedList();

  sll.insertLast('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertLast('Tauhida');
//   sll.remove('squirrel');
  sll.insertBefore('Athena', {value: 'Helo', next: 'Husker'});


  console.log(JSON.stringify(sll, null, 2));
};

main();
