/*
Complete the following Linked List insert tail problem below. There is only one input, the node in which you want to insert to the end of the Linked List. Once the node is inserted to the tail, return the Linked List.

function LinkedList() {
    this.head = null;
} 

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/

const insertTail = node => {
    let currNode = this.head;
    if (currNode) {
        while (currNode.next) { currNode = currNode.next }
        currNode.next = node;
    } else this.head = node;
}

module.exports = insertTail;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Input: { 6 => null }
Expected Output: { 3 => { 4 => { 5 => { 6 => null } } } }

*/
