/* // Uncomment the imports below if you plan on using them
const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
*/

/*
Complete the following Linked List insert at problem below. There are 3 inputs, the Linked List, the node, and the index position in where you want to insert the node. Once the node is inserted into the correct position, return the Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/


const insertAt = (linkedList, node, index) => {

}

module.exports = insertAt;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Input: { 2 => null }, 1
Expected Output: { 3 => { 2 => { 4 => { 5 => null } } } }

Linked List = { 3 => { 4 => { 5 => null } } }
Input: { 2 => null }, 5
Expected Output: { 3 => { 4 => { 5 => null } } } 

*/

/*
    - If index is greater than the size of the linked list, return original linked list
*/