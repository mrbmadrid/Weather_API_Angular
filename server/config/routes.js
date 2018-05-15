var Weather = require('../controllers/weathers')
var path = require('path')
module.exports = function(app){

	app.get("/:city", function(req, res){
		Weather.getCity(req, res)
	})

	app.all("**", (req,res,next) => {
		console.log("Catch All")
  		res.sendFile(path.resolve("./weatherApp/dist/weatherApp/index.html"))
	});

}