exports.createFile = function (dir, fileName) {
	var fs = require('fs');
	
	fs.writeFile(dir + fileName, "", "utf-8", function(err) {
		if(err) {
			Alert.show(err);
		} else {
			Alert.show(fileName + " created in " + dir);
		}
	});
}