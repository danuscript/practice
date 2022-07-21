// MIDDLE OF THE LINKED LIST

// expected input: linked list node 
// expected output: linked list head

// approach 1:
// traverse along the list, updating a counter
// when there are no more nodes
  // if the counter is even, divide it by two then add 1
  // else, if the counter is odd, add 1, then divide it by two
// traverse along the list this many times, then return the current node

function middleNode0(head) {
  
  // declare our counter
  let counter = 1;

  // define current node
  let curr = head

  // loop until we reach the end of the list
  while (curr) {

    // move forward
    curr = curr.next;

    // increment the counter
    counter++;

  // once we're done,
  }

  // lower the counter by half
  (counter % 2 == 0) ? counter = counter / 2 + 1 : counter = (counter + 1) / 2;

  // reset current node
  curr = head
  
  // loop until the counter runs out
  while (counter > 0) {

    // move forward
    curr = curr.next;
  }

  // return current node
  return curr;
  
}

// approach 2: output to array

// iterate through the list and push every node into an array
// return the middle value of the array (arr[arr.length / 2])

function middleNode(head) {

  // declare the output array
  let arr = []

  // define the current node
  let curr = head

  // loop until the end of the list is reached
  while (curr) {

    // push node into array
    arr.push(curr);

    // move to the next node
    curr = curr.next;
  }

  // now, return the middle element of the array
  return arr[Math.trunc(arr.length/2)]
}

// approach 3: use a fast and a slow pointer

// since the halfway point must be reached, 
  // pointer "slow" moves one node at a time
  // pointer "fast" moves two at a time
// when pointer "fast" reaches the end, slow will be halfway through

function middleNode(head) {

  // declare fast and slow pointers
  let fast = head;
  let slow = head;

  // loop through the list until fast reaches the end
  while (fast && fast.next) {

    // move fast pointer two spaces forward
    fast = fast.next.next; 

    // move slow pointer one node forward
    slow = slow.next;
  }

  // when fast pointer finishes, return the slow one!
  return slow;
}
