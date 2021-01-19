/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null; //initialize prev to null
  let curr = head; //initialize curr to head
  while(curr){     //while curr != null
      let nextTemp = curr.next; //create a new variable and set it to the next node
      curr.next = prev;         //set the next node equal to previous node
      prev = curr;              //set current node as previous node
      curr = nextTemp;          //move curr pointer to next node
  }
  return prev;
  
};
