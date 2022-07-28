/*
* @class Node
*/
export class Node {
  public value: any;
  public next?: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @class LinkedList * 
 */
export class LinkedList {
  public head?: Node | null;
  public tail?: Node | null;
  public length: number;

  constructor(value?: any) {
    if (value === null || value === undefined) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return;
    }

    const node: Node = new Node(value);

    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  /**
   * Append a node to the end of the list
   * 
   * @param {any} value - The value to append to the end of the list.
   * @returns {Node} - The node that was appended to the end of the list.
   * @memberof LinkedList
   * */
  public append(value: any): Node {
    const node: Node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  /**
   * Prepend a node to the beginning of the list
   * 
   * @param {any} value - The value to prepend to the beginning of the list.
   * @returns {Node} - The node that was prepended to the beginning of the list.
   * @memberof LinkedList
   * */
  public prepend(value: unknown): Node {
    const node: Node = new Node(value);

    if (!this.length) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.length++;

    return node;
  }

  /**
   * Get and remove the first node in the list
   * 
   * @returns {Node} - The first node in the list.
   * @memberof LinkedList
   * */
  public shift(): Node | undefined {
    if (!this.length) return undefined;

    const node: Node = this.head as Node;

    node.next = null;
    this.head = this.head!.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return node;
  }

  /**
   * Get and remove the last node in the list
   * 
   * @returns {Node} - The last node in the list.
   * @memberof LinkedList
   * */
  public pop(): Node | undefined {
    if (!this.head) return undefined;

    let temp: Node = this.head;
    let pre: Node = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = undefined;
      this.tail = undefined;
    }

    return temp;
  }

  /**
   * Get a node at a specific index
   * 
   * @param {number} index - The index of the node to get.
   * @returns {Node | undefined} - The node at the specified index if it exists. 
   * @memberof LinkedList
   * */
  public get(index: number): Node | undefined {
    if (index < 0 || index >= this.length) return;

    let node: Node = this.head as Node;

    for (let i = 0; i < index; i++) {
      node = node.next as Node;
    }

    return node;
  }

  /**
   * Set the value of a node at a specific index
   * 
   * @param {number} index - The index of the node to set.
   * @param {any} value - The value to set the node.
   * @returns {Node | undefined} - The updated node at the specified index if the node exist. Else undefined.
   * @memberof LinkedList
   * */
  public set(index: number, value: any): Node | undefined {
    const node: Node | undefined = this.get(index);

    if (!node) return;

    node.value = value;

    return node;
  }

  /**
   * Insert a node at a specific index
   * 
   * @param {number} index - The index of the node to insert.
   * @param {any} value - The value to insert into the node.
   * @returns {Node | undefined} - The inserted node at the specified index. 
   * Else undefined if the index is less than zero or greater than the list length.
   * @memberof LinkedList
   * */
  public insert(index: number, value: unknown): Node | undefined {
    if (!index) return this.prepend(value);
    if (index === this.length) return this.append(value);
    if (index < 0 || index > this.length) return;

    const newNode: Node = new Node(value);
    const temp: Node = this.get(index - 1) as Node;

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return newNode;
  }

  /**
   * Remove a node at a specific index
   * 
   * @param {number} index - The index of the node to remove.
   * @returns {Node | undefined} - The removed node at the specified index.
   * Else undefined if the index is less than zero or greater than the list length.
   * @memberof LinkedList
   * */
  public remove(index: number): Node | undefined {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return;

    const before: Node = this.get(index - 1) as Node;
    const node: Node = before.next as Node;

    before.next = node.next;
    node.next = null;

    this.length--;

    return node;
  }
}