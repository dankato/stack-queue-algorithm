'use strict';


// Stack (Last In First Out)
// console.log('-- Stack ----------------');

// Creates a node containing the data and a reference to the next item
function createNode (data = null, next = null) {
  return {
    data,
    next
  };
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
		// if the top of the stack is empty, then the data will be the top of the stack.
    if (this.top === null) {
      this.top = createNode(data);
      return this.top;
    }
		// if the top already has something then create a new node add data to the new node have the pointer point to the top.
    const node = createNode(data, this.top);
    this.top = node;
  }

  pop() {
		// in order to remove the top of the stack, you have anything then the stack is empty otherwise return what's on the top
    if(s.top === null) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek() {
		// if the top of the stack does not have anything then teh stack is empty otherwise return what's on the top.
  if(s.top === null) {
    return null;
  }
  return s.top.data;
}

function display() {
		// displays the entire contents of the stack
  let node = s.top;
  while (node !== null) {
    // console.log(node.data);
    node = node.next;
  }
}

// Stack Tests

let s = new Stack();
s.push(1);
s.push(2);
s.push('Tauhida');
// console.log('Top of stack:', peek());

s.pop();
s.push('joe');
// console.log('Top of stack:', peek());

display();



// Queue (First In First Out)
// console.log('-- Queue ----------------');

function createNode(data = null, next = null, prev = null) {
  return {
    data,
    next,
    prev
  };
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = createNode(data);
    if(this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;

    if(this.first === null) {
      this.first = node;
    }
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if(node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

// other functions that uses the queue class
let q = new Queue();

function displayQueue() {
  let node = q.first;
  while (node !== null) {
    // console.log(node.data);
    node = node.prev;
  }
}


// Queue Tests 


q.enqueue('Tauhida');
q.enqueue('Joe');
q.enqueue('Tim');

// console.log('--what is in the queue------------');
// displayQueue();

// console.log('q.dequeued Tim: ', q.dequeue());

q.enqueue('Alison');
q.enqueue('Chris');
// console.log('dequeued Joe: ', q.dequeue());

// console.log('--what is in the queue------------');
// displayQueue();



// Stack and Queue exercises.md
// https://gist.github.com/tparveen/556fd8789d45cc0c67b46fcdf1ca03de

// Palindromes

// console.log('-- Palindromes ----------------');

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let pStack = new Stack();

  for(let i = 0; i < string.length; i++) {
    // take every letter and push it into new Stack
    let letter = string.charAt(i);
    pStack.push(letter);
  }

  for(let i = 0; i < string.length; i++) {
        let letter = string.charAt(i);
        if(letter !== pStack.pop()) {
          return false;
        } 
      }
  return true;
}

// true, true, true
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));





// Test Case for the parenthesis match... "(1 + 2) + 3"   ")1 + 2) + 3"   "[{'('}('')]"    "([({})])"











