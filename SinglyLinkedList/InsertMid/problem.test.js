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

// Test Case 2:
test("Return a linked list with the node of data 7 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(7);
    outputList.insert(new Node(3));
    outputList.insert(new Node(4));
    outputList.insert(midNode);
    outputList.insert(new Node(5));
    outputList.insert(new Node(6));

    expect(InsertMid(generate.generateLinkedList(3, 6), midNode)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with the node of data 3 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(3);
    outputList.insert(new Node(1));
    outputList.insert(midNode);
    outputList.insert(new Node(2));

    expect(InsertMid(generate.generateLinkedList(1, 2), midNode)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with the node of data 21 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(21);
    generate.addNodesToLinkedList(outputList, 4, 7);
    outputList.insert(midNode);
    generate.addNodesToLinkedList(outputList, 8, 12);

    expect(InsertMid(generate.generateLinkedList(4, 12), midNode)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with the node of data 9999 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(9999);
    generate.addNodesToLinkedList(outputList, 1, 10);
    outputList.insert(midNode);
    generate.addNodesToLinkedList(outputList, 11, 20);

    expect(InsertMid(generate.generateLinkedList(1, 20), midNode)).toEqual(outputList);
})

// Test Case 5:
test("Return a linked list with the node of data 54 inserted to the middle", () => {
    const outputList = new LinkedList();

    const midNode = new Node(54);
    generate.addNodesToLinkedList(outputList, 22, 23);
    outputList.insert(midNode);
    generate.addNodesToLinkedList(outputList, 24, 26);

    expect(InsertMid(generate.generateLinkedList(22, 26), midNode)).toEqual(outputList);
})