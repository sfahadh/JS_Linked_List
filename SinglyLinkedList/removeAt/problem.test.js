const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const RemoveAt = require("./problem");

// Test Case 1:
test("Return a linked list with the node of data 4 at index 1 removed", () => {
    const outputList = new LinkedList;
    outputList.insert(new Node(3));
    outputList.insert(new Node(5));
    expect(RemoveAt(generate.generateLinkedList(3, 5), 1)).toEqual(outputList);
})