

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: Finds One element using id.
getElementsByClassName: Finds many elements using class name.
querySelector / querySelectorAll: querySelector finds the 1st matching element using CSS selector and querySelectorAll finds all matching elements using CSS selector.

### 2. How do you create and insert a new element into the DOM?

const parentDiv = document.getElementById('parentDiv');
const newElement = document.createElement('p');
newElement.innerText = 'Hello DOM';
parentDiv.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
Event bubbling in JavaScript means that when an event occurs like a click on the child element, that same event comes up and affects its parent element as well. In this way, both the child element and the parent element can respond to the event.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events for its child elements. Instead of attaching separate event listeners to each child, the parent listens for events that bubble up from the children and handles them using the event object.
Event delegation works because of event bubbling, where events propagate from the target element to its ancestors in the DOM.
it improves performance,works with dynamic elements, clean and maintainable code.
