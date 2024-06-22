//========== Question One - Matching Bracket | Solution ==========

function isMatching(str) {
  const stack = [];
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingBrackets[char]
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log("========== Question One - Matching Bracket | Solution ==========");

// Example usage:
console.log(isMatching("()"));
console.log(isMatching("()[]{}"));
console.log(isMatching("(]"));
console.log(isMatching("([)]")); // false
console.log(isMatching("{[]}")); // true

//========== Question Two - Pair Sum Problem | Solution ==========

function PairTwoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }

  return [];
}

console.log("========== Question Two - Pair Sum Problem | Solution ==========");
// Example usage:
console.log(PairTwoSum([2, 7, 11, 15], 9));
console.log(PairTwoSum([3, 2, 4], 6));

//========== Question Four - Sorting Restaurant Solution ==========

function recommendRestaurants(restaurants, targetRating) {
  restaurants.sort((a, b) => b.rating - a.rating);

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.rating >= targetRating
  );
  return filteredRestaurants;
}

// Example usage:
const restaurants = [
  { name: "Pizza Palace", rating: 4.8 },
  { name: "Curry Corner", rating: 4.2 },
  { name: "Amazing Asian", rating: 4.5 },
  { name: "Healthy Eats", rating: 3.9 },
];

console.log(
  "========== Question Four - Sorting Restaurant Solution =========="
);

console.log(recommendRestaurants(restaurants, 4.5));

//========== Question Six - Reverse Linked List Solution ==========
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Save the next node
    next = current.next;

    // Reverse the current node's pointer
    current.next = prev;

    // Move pointers one step forward
    prev = current;
    current = next;
  }

  // prev will be the new head of the reversed list
  return prev;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for easy output
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// Example usage:
let head = createLinkedList([1, 2, 3, 4, 5]);
let newHead = reverseList(head);

console.log(
  "========== Question Six - Reverse Linked List Solution =========="
);
console.log(linkedListToArray(newHead));
