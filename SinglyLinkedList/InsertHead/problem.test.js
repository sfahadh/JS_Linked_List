const ll = require("../../Starter/starter");
const insertHead = require("./problem");

const generateLinkedList = num => {
    const linkedList = new ll.LinkedList();
    for (let i = 1; i <= num; i++) {
        linkedList.insert(new ll.Node(i))
    }
    return linkedList;
}

test("Return a linked list with new node as the head", () => {
    const outputList = new ll.LinkedList();

    const headNode = new ll.Node(3);
    const node2 = new ll.Node(1);
    const node3 = new ll.Node(2);
    outputList.insert(headNode);
    outputList.insert(node2);
    outputList.insert(node3);

    expect(insertHead(generateLinkedList(2), headNode)).toEqual(outputList);
})