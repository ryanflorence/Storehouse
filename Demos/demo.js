window.addEvent('domready',function(){

	myStorehouse = new Storehouse();
		
	$('store_red').addEvent('click',function(){

		if(!myStorehouse.red){
			this.set('text','inject red');
			myStorehouse.store('red', 'div.red'); 
			// or use `myStorehouse.dispose('red', 'div.red')`
			// `store` and `dispose` are interchangable
			// elements now accessible by `myStorehouse.red`
		} else {
			this.set('text','dispose red');		
			myStorehouse.inject('red');
			// injects elements back where they belong
		}
	});
	
	// StoreHouse supports as many collections of elements as you want
	$('store_green').addEvent('click',function(){
		if(!myStorehouse.green){
			this.set('text','inject green');
			myStorehouse.dispose('green','div.green');
			// elements stored in myStorehouse.green
			
		} else {
			this.set('text','dispose green');
			myStorehouse.inject('green');
		}
		
	});
	
});