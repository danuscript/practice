// construct a function partition
function partition(head, x) {

    // declare an output array
    let arr = [];

    // define the current node
    let curr = head;

    // iterate through my linked list 
    while (curr) {

        // push the current node's value into the array
        arr.push(curr.val);

        // current node then moves forward
        curr = curr.next;
    }

    // define sorted array
    let sortArr = [];

    // iterating through the unsorted array
    for (let i = 0; i < arr.length; i++) {

        // push each number to the sorted array based off its value
        if (arr[i] < x) {
            sortArr.push(arr[i])
        }

    }

    // iterating through the unsorted array
    for (let i = 0; i < arr.length; i++) {

        // push each number to the sorted array based off its value
        if (arr[i] >= x) {
            sortArr.push(arr[i])
        }
    }

    // redefine current node
    curr = head;

    // iterate through sorted array and linked list simultaneously
    for (let i = 0; i < sortArr.length; i++) {
        
        // assign the value of the current array index to the current node
        curr.val = sortArr[i];

        // move forward to the next node
        curr = curr.next;        
    }

    // returning the first node of the newly arranged linked list
    return head;

}
