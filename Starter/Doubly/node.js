function Node(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

module.exports = Node;