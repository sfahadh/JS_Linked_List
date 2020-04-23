function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

LinkedList.prototype.insertTail = function(node) {
    let currNode = this.head;
    if (currNode) {
        while (currNode.next) { currNode = currNode.next }
        currNode.next = node;
    } else this.head = node;
}

module.exports = {
    LinkedList: LinkedList,
    Node: Node
}
