const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const Reverse = require("./problem");

// Test Case 1:
test("Return a linked list where nodes traverse from 6 to 3", () => {
    const outputList = new LinkedList();
    outputList.insert(new Node(6));
    outputList.insert(new Node(5));
    outputList.insert(new Node(4));
    outputList.insert(new Node(3));

    expect(Reverse(generate.generateLinkedList(3, 6))).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list where nodes traverse from 41 to 32", () => {
    const outputList = new LinkedList();
    outputList.insert(new Node(41));
    outputList.insert(new Node(40));
    outputList.insert(new Node(39));
    outputList.insert(new Node(38));
    outputList.insert(new Node(37));
    outputList.insert(new Node(36));
    outputList.insert(new Node(35));
    outputList.insert(new Node(34));
    outputList.insert(new Node(33));
    outputList.insert(new Node(32));
    
    expect(Reverse(generate.generateLinkedList(32, 41))).toEqual(outputList);
})

// Test Case 3:
test("Return original linked list", () => {
    const outputList = new LinkedList();
    outputList.insert(new Node(1));
    
    expect(Reverse(generate.generateLinkedList(1, 1))).toEqual(outputList);
})

// Test Case 4:
test("Return a linked list where nodes traverse from 12 to 13", () => {
    const outputList = new LinkedList();
    outputList.insert(new Node(13));
    outputList.insert(new Node(12));

    expect(Reverse(generate.generateLinkedList(12, 13))).toEqual(outputList);
})

// Test Case 5:
test("Return empty linked list", () => {
    expect(Reverse(new LinkedList())).toEqual(new LinkedList);
})