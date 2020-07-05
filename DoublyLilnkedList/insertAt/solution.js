const insertTail = (linkedList, node) => {
    let curr = linkedList.head;
    if (curr) {
        while (curr.next) { curr = curr.next }
        curr.next = node;
        node.prev = curr;
    } else linkedList.head = node;

    return linkedList;
}