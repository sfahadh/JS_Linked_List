/*
Complete the following Linked List insert head problem below. There are 2 inputs, the Linked List and the node in which you want to insert to the head of that Linked List. Once the node is inserted to the head, return the Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/


const insertHead = (linkedList, node) => {
    linkedList.head = node;
    return linkedList;
}

module.exports = insertHead;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Input: { 2 => null }
Expected Output: { 2 => { 3 => { 4 => { 5 => null } } } }

*/