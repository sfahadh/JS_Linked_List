/*
Complete the following Linked List insert mid problem below. There are 2 inputs, the Linked List and the node in which you want to insert to the middle of that Linked List. Once the node is inserted to the middle, return the Linked List.

function LinkedList() {
    this.head = null;
} 

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/

const insertMid = (linkedList, node) => {

}

module.exports = insertMid;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Input: { 6 => null }
Expected Output: { 3 => { 6 => { 4 => { 5 => null } } } }

Linked List = { 3 => { 4 => { 5 => { 6 => null } } } }
Input: { 7 => null }
Expected Output: { 3 => { 4 => { 7 => { 5 => { 6 => null } } } } }

*/
