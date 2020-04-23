const ll = require("../../Starter/starter");
const InsertTail = require("./problem");

const generateLinkedList = num => {
    const linkedList = new ll.LinkedList();
    for (let i = 1; i <= num; i++) {
        linkedList.insert(new ll.Node(i))
    }
    return linkedList;
}

test("Return a linked list with 1 node", () => {
    const outputList = new ll.LinkedList();

    const tailNode = new ll.Node(4);
    const node2 = new ll.Node(1);
    const node3 = new ll.Node(2);
    outputList.insert(node2);
    outputList.insert(node3);
    outputList.insert(tailNode);

    expect(InsertTail(generateLinkedList(2), tailNode)).toEqual(outputList);
})