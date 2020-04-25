const LinkedList = require("../../Starter/linkedList");
const Node = require("../../Starter/node");
const generate = require("../../Starter/generate");
const InsertAt = require("./problem");

// Test Case 1:
test("Return a linked list with node of data 52 in index position 1", () => {
    const outputList = new LinkedList();

    const node = new Node(52);
    outputList.insert(new Node(3));
    outputList.insert(node);
    outputList.insert(new Node(4));
    outputList.insert(new Node(5));

    expect(InsertAt(generate.generateLinkedList(3, 5), node, 1)).toEqual(outputList);
})

// Test Case 2:
test("Return a linked list with node of data 3 in index position 0", () => {
    const outputList = new LinkedList();

    const node = new Node(3);
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 10, 13);

    expect(InsertAt(generate.generateLinkedList(10, 13), node, 0)).toEqual(outputList);
})

// Test Case 3:
test("Return original linked list - Part 1", () => {
    const list = generate.generateLinkedList(3, 8);
    expect(InsertAt(list, new Node(5), 12)).toEqual(list);
})

// Test Case 4:
test("Return original linked list - Part 2", () => {
    const list = generate.generateLinkedList(12, 17);
    expect(InsertAt(list, new Node(5), 2)).toEqual(list);
})

// Test Case 5:
test("Return a linked list with node of data 3 in index position 3", () => {
    const outputList = new LinkedList();

    const node = new Node(3);
    generate.addNodesToLinkedList(outputList, 6, 8);
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 9, 15);

    expect(InsertAt(generate.generateLinkedList(6, 15), node, 3)).toEqual(outputList);
})

// Test Case 6:
test("Return original linked list - Part 3", () => {
    const list = generate.generateLinkedList(4, 5);
    expect(InsertAt(list, new Node(3), 3)).toEqual(list);
})

// Test Case 7:
test("Return a linked list with node of data 9999 in index position 1", () => {
    const outputList = new LinkedList();

    const node = new Node(9999);
    outputList.insert(new Node(43));
    outputList.insert(node);
    generate.addNodesToLinkedList(outputList, 44, 50);

    expect(InsertAt(generate.generateLinkedList(43, 50), node, 1)).toEqual(outputList);
})

// Test Case 8:
test("Return a linked list with node of data 42 in index position 10", () => {
    const outputList = new LinkedList();

    const node = new Node(42);
    generate.addNodesToLinkedList(outputList, 21, 23);
    outputList.insert(node);

    expect(InsertAt(generate.generateLinkedList(21, 23), node, 2)).toEqual(outputList);
})

// Test Case 9:
test("Return original linked list - Part 4", () => {
    const list = generate.generateLinkedList(1, 4);
    expect(InsertAt(list, new Node(14), 5)).toEqual(list);
})
