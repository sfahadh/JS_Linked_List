const ll = require("../../Starter/starter");
const InsertTail = require("./problem");

test("Return a linked list with 1 node", () => {
    const oldList = new ll.LinkedList();
    const newList = oldList;
    const node = new ll.Node(4);
    newList.insert(node)
    expect(InsertTail(oldList, node)).toEqual(newList);
})