const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const insertHead = require("./problem");

test("Return a linked list with new node as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(3);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 1, 2);

    expect(insertHead(generate.generateLinkedList(1, 2), headNode)).toEqual(outputList);
})