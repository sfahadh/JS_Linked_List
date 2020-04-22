function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

module.exports = { LinkedList, Node }