var fs = require('fs');

module.exports = {
   load: function (callback) {
      var configFile = __dirname + "/compliments.json";
      fs.readFile(configFile, 'utf8', function(err, data) {
         if (!err) {
            if (typeof callback === 'function') callback(false, JSON.parse(data));
         }
         else {
            console.log("Error loading config! " + err);
            if (typeof callback === 'function') callback(true, err)
         }
      });
   }
};