/* // Uncomment the imports below if you plan on using them
const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
*/

/*
Complete the following Linked List remove at problem below. There is are 2 inputs, which is the linkedlist and the index position in where you want to remove the node from. Remove the node and once that's done, return the Linked List.

function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
*/


const removeAt = (linkedList, index) => {

}

module.exports = removeAt;

/*

Linked List = { 3 => { 4 => { 5 => null } } }
Input: (Linked List, 1)
Expected Output: { 3 => { 5 => null } } 

Linked List = { 3 => { 4 => { 5 => { 6 => null } } } }
Input: (Linked List, 3)
Expected Output: { 3 => { 4 => { 5 => null } } } 

*/

/*
    - If index is greater than the size of the linked list, return original linked list
*/