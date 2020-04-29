const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const Sort = require("./problem");

// Test Case 1:
test("Return a sorted linked list: { 3 => { 24 => { 29 => { 42 => null } } } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    const node1 = new Node(3);
    const node2 = new Node(24);
    const node3 = new Node(29);
    const node4 = new Node(42);

    inputList.insert(node3);
    inputList.insert(node1);
    inputList.insert(node2);
    inputList.insert(node4);

    outputList.insert(node1);
    outputList.insert(node2);
    outputList.insert(node3);
    outputList.insert(node4);

    expect(Sort(inputList)).toEqual(outputList);
})

// Test Case 2:
test("Return a sorted linked list: { 1 => { 2 => { 3 => { 4 => { 5 => null } } } } }", () => {
    const inputList = new LinkedList;
    const outputList = generate.generateLinkedList(1, 5);

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    inputList.insert(node3);
    inputList.insert(node1);
    inputList.insert(node2);
    inputList.insert(node5);
    inputList.insert(node4);

    expect(Sort(inputList)).toEqual(outputList);
})

// Test Case 3:
test("Return original linked list - Part I", () => {
    const list = generate.generateLinkedList(1, 1);
    expect(Sort(list)).toEqual(list);
})

// Test Case 4:
test("Return original linked list - Part II", () => {
    const list = generate.generateLinkedList(57, 88);
    expect(Sort(list)).toEqual(list);
})

// Test Case 5:
test("Return a sorted linked list: { 33 => { 63 => { 99 => null } } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    const node1 = new Node(99);
    const node2 = new Node(63);
    const node3 = new Node(33);

    inputList.insert(node1);
    inputList.insert(node2);
    inputList.insert(node3);

    outputList.insert(node3);
    outputList.insert(node2);
    outputList.insert(node1);

    expect(Sort(inputList)).toEqual(outputList);
})

// Test Case 6:
test("Return a sorted linked list: { 134 => { 167 => null } }", () => {
    const inputList = new LinkedList;
    const outputList = new LinkedList;

    const node1 = new Node(134);
    const node2 = new Node(167);

    inputList.insert(node2);
    inputList.insert(node1);

    outputList.insert(node1);
    outputList.insert(node2);

    expect(Sort(inputList)).toEqual(outputList);
})

// Test Case 7:
test("Return original linked list - Part III", () => {
    const list = new LinkedList;

    const node1 = new Node(25);
    const node2 = new Node(189);

    list.insert(node1);
    list.insert(node2);

    expect(Sort(list)).toEqual(list);
})