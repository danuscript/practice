// REVERSE LINKED LIST II

// expected input: node(head), num1, num2
// expected output: node(head)

// approach: use an output array
// start a counter to keep track of nodes
// traverse along linked list
//   for every node within range of left to right, push it to an array
// traverse along linked list
//   for every node within range of left to right
//     replace with last node from array, popping as i go
// return list

function reverseBetween(head, left, right) {

    // initialize an array to keep track of nodes
    let arr = [];

    // initialize a counter to keep track of position
    let pos = 1

    // define current node
    let curr = head;

    // traverse along linked list
    while (curr) {

        // if position is within range of left to right
        if (pos >= left && pos <= right) {

            // push current node into array
            arr.push(curr.val);
        }

        // increment counter and move on to next node
        curr = curr.next;
        pos++;
    }

    // reset the position tracker and the current node
    pos = 1;
    curr = head;

    // traverse along linked list
    while (curr) {

        // if position is within range of left to right
        if (pos >= left && pos <= right) {

            // assign last element of array to current node's value
            curr.val = arr.pop();
        }

        // increment position tracker and move on to next node
        curr = curr.next;
        pos++;

    }

    return head;
}

// approach 2: recursion

// first, we look at how to reverse an array with two pointers

let testArr = [1, 2, 3, 4, 5, 6, 7, 8] 

let left = 0;
let right = testArr.length - 1;

while (left <= right) {
   let l = testArr[left];
   let r = testArr[right];
   testArr[left] = r;
   testArr[right] = l;
   left++;
   right--;
}

console.log(testArr) // -> [8, 7, 6, 5, 4, 3, 2, 1]

// however, there's no backwards iteration or indexes in a singly-linked list

// instead, we can simulate the backwards pointer with recursion

// construct a function for reversing a portion of the linked list
// m = the starting point of the reversal
// n = the ending point of the reversa
// right = 
function recurse(m, n, right)
