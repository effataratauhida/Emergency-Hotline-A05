1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is given below:
getElementById is always used to access a specific element that has a unique id and returns only an element.
getElementsByClassName is always used to access all the elements of a specific class  and returns HTMLCollection.
querySelector is a CSS selector which can select a specific element and returns the first matching element.
querySelectorAll is a CSS selector which can select multiple elements and returns NodeList (all the matching element).

2.How do you create and insert a new element into the DOM?

Ans: To create a new element into the DOM we use document.createElement() and
to insert a text into the DOM: newElement.innerText