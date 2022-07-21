/* DATA SRUCTURE: LINKED LIST (singly-linked)

A linked list is a data structure where elements are stored in nodes.
Each node points to the next one.

This data strucutre is preferable to an array when:
- Many elements will be added/removed

This is because TRUE arrays take up contiguous space in memory.
Adding/removing elements shifts the entire array, increasing its contiguous size.

Linked lists on the other hand can store all of their elements separately.
Adding an element at a specific index simply requires:
- Pointing it to the element at the next index
- Pointing the previous element to the new element

This means adding elements is done in constant time instead of linear time.

(Arrays in javascript are objects, not true arrays, but the general idea remains.)

However, linked lists have drawbacks as well. 
Because the elements are not contigous, you must traverse the entire list to get to it.

There are multiple types of linked list:
Singly-linked - each node points to the next
Doubly-linked - each node points to the next and previous

Either a singly-linked list or a doubly-linked list can be circular:
Circular - the tail node points to the head node, creating a circle

Singly-linked lists can be traversed forward.
Doubly- linked lists can be traversed forward or backward.

The list itself usually three poroperties:
size - the number of elements in the list
head - the first element in the linked list
tail - the last element in the linked list ("next" property points to null)

Each node in a singly-linked list is an object with two properties:

value: the value of the element
next: a pointer (refrence) to the next node object

A linked list has several main operations:
add - adds an element to the end of a linked list
addAt - adds an element at the specified index
remove - removes an element with a specified name
removeAt - removes an element at the specified index
indexOf - returns the index of a specific element
elementAt - returns the element at a specific index
isEmpty - returns a boolean value of whether the list is empty or not

*/

// create a class: a template for creating node objects
class Node {

  // create the constructor function that will make a new node
  constructor(value, prev, next) {

    // add a property "value" with the value of the argument that was passed in
    this.value = value;

    // add a property "prev" with the value pointing to either:
      //the "prev" argument passed in, if one exists, or
      // null
    this.prev = prev || null;

    // add a property "next" with the value pointing to either:
      //the "next" argument passed in, if one exists, or
      // null
    this.next = next || null;
  }
}


// create a class: a template for creating list objects
class LinkedList {

  // create the constructor function that will make a new linked list
  constructor() {

    // add the property "head" with a starting value of null
    this.head = null;

    // add the property "tail" with a starting value of null
    this.tail = null;

    // add the length property with a starting value of 0
    this.length = 0;
  }

  // add a method for adding nodes to the end of the list
  append(value) {

    // if the list is empty
    if (!this.tail) {

      // create a new node and assign it to be the head and the tail
      this.head = this.tail = new Node(value)

      // increase the list's length by 1
      this.length++;

    // otherwise, if this list has a tail already
    } else {

      // take the current tail
      let oldTail = this.tail;

      // create a new node and assign it to be the new tail
      this.tail = new Node(value);

      // increase the list's length by 1
      this.length++;

      // point the old tail to the new tail
      oldTail.next = this.tail;

      // point the new tail to the old tail
      this.tail.prev = oldTail;
    }
  }

  // add a method for adding nodes to the beginning of the list
  prepend(value) {

    // if the list is empty
    if (!this.head) {

      // create a new node and assign it to be the head and the tail
      this.head = this.tail = new Node(value)

      // increase the list's length by 1
      this.length++;

    // otherwise, if this node has a head already
    } else {

      // take the current head
      let oldHead = this.head;

      // create a new node and assign it to be the new head
      this.head = new Node(value);

      // increase the list's length by 1
      this.length++;

      // point the old head to the new head
      oldHead.prev = this.head;

      // point the new head to the old head
      this.head.next = oldHead;
    }
  }

  // add a method for deleting the head of a list
  deleteHead() {

    // if the list is empty
    if (!this.head) {

      // return null
      return null;

    // else, if the list has a head  
    } else {

      // take the current head
      let removedHead = this.head;

      // if the head is the only element
      if (this.head === this.tail) {

        // set both the head and the tail to null
        this.head = this.tail = null

        // decrease the list's length by 1
        this.length--;
      
      // otherwise, if there are other elements
      } else {

          // set the new head to the value of the node next to the old head
          this.head = this.head.next

          //remove the pointer to the old head
          this.head.prev = null;

          // decrease the list's length by 1
          this.length--
      }

      // return the removed head
      return removedHead.value;
    }
  }

  // add a method for deleting the tail of a list
  deleteTail() {

    // if the list is empty
    if (!this.tail) {

      // return null
      return null;

    // else, if the list has a tail
    } else {

      // take the current tail
      let removedTail = this.tail;

      // if the tail is the only element
      if (this.tail === this.head) {

        // set both the tail and the head to null
        this.tail = this.head = null

        // decrease the list's length by 1
        this.length--;
       
      // otherwise, if there are other elements
      } else {

        // set the new tail to the value of the node before the old tail
        this.tail = this.tail.prev;

        // remove the pointer to the old tail
        this.tail.next = null;

        // decrease the list's length by 1
        this.length--;
      }

      // return the removed tail's value
      return removedTail;
    }
  }

  // add a method for searching the list
  search(value) {

    // define our current node
    let curr = this.head;

    // iterate through the nodes until the end
    while (curr) {

      // if ithe current node matches our search term
      if (curr.value == value) {

        // return current node
        return curr;
      
      // otherwise, if the current node isn't a match
      }

        // move forward one node
        curr = curr.next
    
    // if we reach the end of this list without returning a match
    }
    
    // return null
    return null;
  }
}

let testList = new LinkedList();


testList.append("Dogs")
testList.append("Cats")
testList.append("Parrots")
testList.append("Hamsters")
console.log(testList.length)
console.log(testList.search("Mice"))
console.log(testList.search("Dogs"))
