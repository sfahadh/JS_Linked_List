function LinkedList() {
    this.head = null;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}


module.exports = { LinkedList, Node }
