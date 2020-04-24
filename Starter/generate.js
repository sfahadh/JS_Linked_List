const ll = require("./starter");

const generateLinkedList = (start, end) => {
    const linkedList = new ll.LinkedList();
    for (let i = start; i <= end; i++) {
        linkedList.insert(new ll.Node(i))
    }
    return linkedList;
}

const addNodesToLinkedList = (linkedList, start, end) => {
    for (let i = start; i <= end; i++) {
        linkedList.insert(new ll.Node(i))
    }
    return linkedList;
}

module.exports = {
    generateLinkedList: generateLinkedList, 
    addNodesToLinkedList: addNodesToLinkedList
}