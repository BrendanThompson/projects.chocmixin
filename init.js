	// Hooks.addMenuItem("Projects/New/Choc Mixin", '', function(){
//     //Alert.show("This would be a new project!");
//     
//     var mk = require('./lib/files.js');
//     
//     mk.createFile("/Users/brendan/", "testme.js");
// });

// Hooks.addMenuItem("Projects/Test", '', function() {
//     var win = new Window();
//     
//     win.title = "My Window";
//     win.buttons = ["OK", "Cancel"];
//     win.onButtonClick = function ("OK") {
//         Alert.show("clicked");
//     }
// });

Hooks.addMenuItem("Projects/New/Test", '', function(){
	//Alert.show("This would be a new project!");
	
	var win = new Window();
	win.htmlPath = "newFile.html";
	win.buttons = ["OK"];
	win.onButtonClick = function() {
		Alert.show(directory + fileName);
		win.close();
	}
	
	var fileName = String(win.evalExpr('document.getElementById("filename").value'));
	var directory = String(win.evalExpr('document.getElementById("directory").value'));
	
	win.run();
});