const ll = require("../../Starter/starter");
const InsertTail = require("./problem");

test("Return a linked list with 1 node", () => {
    const linkedList = new ll.LinkedList();
    const node = new ll.Node(4);
    expect(InsertTail(node)).toEqual(linkedList);
})