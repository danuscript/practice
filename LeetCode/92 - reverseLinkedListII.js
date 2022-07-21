/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
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
