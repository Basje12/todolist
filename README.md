# Todolist

A simple todolist which accepts an input in the field to add to the list.
Click the button or press enter to add the item to the list.
Click the X button to remove the item from the list when you're done.

### Localstorage
This todolist uses localstorage to remember your todolist. You can add an item, then close the browser. It'll be there when you get back. Only removing it from the list with the button will actually mark it as done.

### Todo
Using localstorage is done by adding or removing items from an array and updating the entire array in localStorage. Given the size this list is going to have, not really a big deal. But it seems inefficient. Have not yet found a way to do it better.
