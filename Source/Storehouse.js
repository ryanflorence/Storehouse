/*
---

script: Storehouse.js

description: Provides methods to dispose an array of elements from the DOM and inject them back to their original positions

license: MIT-style license.

authors: Ryan Florence

docs: http://moodocs.net/rpflo/mootools-rpflo/Storehouse

requires:
 core/1.2.4:
  - Class
  - Element

provides: [Storehouse]

...
*/

var Storehouse = new Class({
	
	dispose: function(shelf, elements){
		this[shelf] = [];
		$$(elements).each(function(element){
			if(element.getPrevious()){
				element.store('previous',element.getPrevious());
			} else if(element.getNext()) {
				element.store('next',element.getNext());
			} else {
				element.store('parent',element.getParent());
			};
			this[shelf].include(element.dispose());
		}.bind(this));
		return this;
	},
	
	inject: function(shelf){
		this[shelf].reverse().each(function(element){
			var previous = element.retrieve('previous');
			var next = element.retrieve('next');
			var parent = element.retrieve('parent');
			if(previous){
				element.inject(previous,'after');
			} else if(next) {
				element.inject(next,'before');
			} else {
				element.inject(parent);
			}
		});
		delete this[shelf];
		return this;
	},
	
	store: function(shelf, elements){
		return this.dispose(shelf, elements);
	}

});

