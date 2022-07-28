/*
* @class Node
* @param {any} value
*/
export class Node {
  public value: any;
  public next?: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}