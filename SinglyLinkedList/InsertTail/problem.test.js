const generate = require("../../Starter/generate");
const ll = require("../../Starter/starter");
const InsertTail = require("./problem");

test("Return a linked list with 1 node", () => {
    const outputList = new ll.LinkedList();
    generate.addNodesToLinkedList(outputList, 1, 2);

    const tailNode = new ll.Node(4);
    outputList.insert(tailNode);

    expect(InsertTail(generate.generateLinkedList(1, 2), tailNode)).toEqual(outputList);
})