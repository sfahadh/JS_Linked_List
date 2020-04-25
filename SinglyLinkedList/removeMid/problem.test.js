const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node")
const generate = require("../../Starter/generate");
const RemoveHead = require("./problem");

// Test Case 1:
test("Return a linked list with mid node of data 4 removed", () => {
    const outputList = new LinkedList();

    outputList.insert(new Node(3));
    outputList.insert(new Node(5));

    expect(RemoveHead(generate.generateLinkedList(3, 5))).toEqual(outputList);
})
