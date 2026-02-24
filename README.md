

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

