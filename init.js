Hooks.addMenuItem("Projects/New/Choc Mixin", '', function(){
	//Alert.show("This would be a new project!");
	
	var fs = require('fs');
	
	fs.writeFile("/Users/brendan/Development/choc-test/init.js", "utf-8", ,function(err) {
		if (err) {
			Alert.show(err);
		} else {
			Alert.show("The file was created!");
		}
	});
});

Hooks.addMenuItem("Projects/Test", '', function() {
	var win = new Window();
	
	win.title = "My Window";
	win.buttons = ["OK", "Cancel"];
	win.onButtonClick = function ("OK") {
		Alert.show("clicked");
	}
})