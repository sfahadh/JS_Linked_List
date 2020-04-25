/*
Complete the following Linked List remove mid problem below. There is only 1 input, which is the linkedlist. Remove the middle node and once that's done, return the Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/ 


const removeMid = linkedList => {
    const mid = Math.floor(linkedListLength(linkedList) / 2);
    let count = 0;
    let curr = linkedList.head;
    let prev = curr;

    while (curr) {
        if (count === mid) {
            prev.next = curr.next;
            curr.next = null;
            break;
        }

        count++;
        prev = curr;
        curr = curr.next;
    }

    return linkedList;
}

const linkedListLength = linkedList => {
    let count = 0;
    let curr = linkedList.head;

    while (curr) {
        count++;
        curr = curr.next;
    }

    return count;
}

module.exports = removeMid;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Expected Output: { 3 => { 5 => null } } 

Linked List = { 4 => { 5 => { 6 => { 7 => null } } } }
Expected Output: { 4 => { 5 => { 7 => null } } } 

*/

/*
    - You can assume that the linked list will always have at LEAST 3 nodes.
*/