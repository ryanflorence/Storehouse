Class: Storehouse {#Storehouse}
===============================


<big>Provides methods to remove an array of elements from the DOM and inject them back to their original positions.</big>

### Demo:

<iframe src="http://mooshell.net/hYgNF/embedded/result%2Cjs%2Chtml/" style="width: 100%; height:370px"></iframe>

### Example

    var myStorehouse = new Storehouse();
    var elements = $$('div.apple');
    myStorehouse.dispose(elements, 'apples');

    // later
    myStorehouse.inject('apples');

Storehouse Method: dispose {#Storehouse:dispose}
-------------------------------------------------

<big>Disposes an array of elements and stores them with the class instance on the specified "shelf".  One instance can store multiple shelves.</big>

### Syntax:

    myStorehouse.dispose(elements, shelf);

### Arguments:

1. elements - (_array_) An array of elements to be removed from the DOM
2. shelf = (_string_) The shelf on which to store your elements in the class

### Returns:

This Storehouse instance.



Storehouse Method: inject {#Storehouse:inject}
-----------------------------------------------

<big>Replaces the elements to their original positions.</big>

### Syntax:

    myStorehouse.inject(shelf);

### Arguments:

1. shelf = (_string_) The shelf storing the elements to inject back into the DOM.
