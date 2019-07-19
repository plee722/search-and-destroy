'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let current = linkedlist.head;
  // let other = this.head;
  while (current.next !== null) {
    if (current.next.value !== current.value) {
      return true;
    } elseif ()
  }
  return false
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
