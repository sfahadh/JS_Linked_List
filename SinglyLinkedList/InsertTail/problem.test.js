const generate = require("../../Starter/generate");
const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const InsertTail = require("./problem");

test("Return a linked list with 1 node", () => {
    const outputList = new LinkedList();
    generate.addNodesToLinkedList(outputList, 1, 2);

    const tailNode = new Node(4);
    outputList.insert(tailNode);

    expect(InsertTail(generate.generateLinkedList(1, 2), tailNode)).toEqual(outputList);
})