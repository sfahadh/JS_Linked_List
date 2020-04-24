const generate = require("../../Starter/generate");
const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const InsertMid = require("./problem");

// Test Case 1:
test("Return a linked list with the node of data 6 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(6);
    outputList.insert(new Node(3));
    outputList.insert(midNode);
    outputList.insert(new Node(4));
    outputList.insert(new Node(5));

    expect(InsertMid(generate.generateLinkedList(3, 5), midNode)).toEqual(outputList);
})