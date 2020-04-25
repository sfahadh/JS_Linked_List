const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const InsertAt = require("./problem");

// Test Case 1:
test("Return a linked list with node of data 52 in index position 2", () => {
    const outputList = new LinkedList();

    const midNode = new Node(52);
    outputList.insert(new Node(1));
    outputList.insert(new Node(2));
    outputList.insert(midNode);
    outputList.insert(new Node(3));

    expect(InsertAt(generate.generateLinkedList(1, 3), midNode, 2)).toEqual(outputList);
})