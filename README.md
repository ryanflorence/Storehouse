Storehouse
==========

![FitText](http://github.com/rpflorence/Storehouse/raw/master/logo.png)

Provides methods to dispose an array of elements from the DOM and inject them back to their original positions

How to use
----------

    var myStorehouse = new Storehouse();
    myStorehouse.store('apples', 'div.apple');

    // access for manipulation or whatever
    console.log(myStorehouse.apples);
    
    // later
    myStorehouse.inject('apples');
    
Use cases
---------

* Pulling elements out of the DOM to do some heavy manipulation so the browser doesn't have to render things as you manipulate
* Scripts that rely on `getNext` or `getPrevious` can find the correct element if you want to hide some, rather than messing around w/ extra logic to get the correct element when it's immediate neighbors are hidden.