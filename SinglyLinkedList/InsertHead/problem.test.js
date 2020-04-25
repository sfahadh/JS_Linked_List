const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const InsertHead = require("./problem");

// Test Case 1:
test("Return a linked list with new node of data 3 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(3);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 1, 2);

    expect(InsertHead(generate.generateLinkedList(1, 2), headNode)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with new node of data 1 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(1);
    outputList.insert(headNode);

    expect(InsertHead(new LinkedList(), headNode)).toEqual(outputList);
})

// Test Case 3:
test("Return a linked list with new node of data 8 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(8);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 1, 7);

    expect(InsertHead(generate.generateLinkedList(1, 7), headNode)).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list with new node of data 1005 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(1005);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 432, 1002);

    expect(InsertHead(generate.generateLinkedList(432, 1002), headNode)).toEqual(outputList);
})

// Test Case 5:
test("Return a linked list with new node of data 15 as the head", () => {
    const outputList = new LinkedList();

    const headNode = new Node(15);
    outputList.insert(headNode);
    generate.addNodesToLinkedList(outputList, 14, 14);

    expect(InsertHead(generate.generateLinkedList(14, 14), headNode)).toEqual(outputList);
})