(1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is given below:
getElementById is always used to access a specific element that has a unique id and returns only an element.
getElementsByClassName is always used to access all the elements of a specific class  and returns HTMLCollection.
querySelector is a CSS selector which can select a specific element and returns the first matching element.
querySelectorAll is a CSS selector which can select multiple elements and returns NodeList (all the matching element).


(2) How do you create and insert a new element into the DOM?

Ans: To create a new element into the DOM we use document.createElement() and
to insert a text or element into the DOM we use appendChild() or insertBefore() .


(3) What is Event Bubbling and how does it work?

Ans: Event Bubbling is where an event starts from the first inner element and moves up to its parent elements. 
It allows parent elements to respond to the event on the child element.


(4) What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is process where we add one event listener on a parent element to handle events on its child elements.
It is useful because it saves memory and also works for new child elements added later.


(5) What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is a method that stops the default behaviour of an event, like preventing a link from opening or preventing a page from reloading when a link is clicked.
stopPropagation() is a method that stops the event from bubbling or propagating to its parent elements.
