var location = require('../Models/locations.js')


var startLocation = function(req, res) {
	
	res.render('index', {
		location: location[0].location
	});
};

var nextLocation = function(req, res) {
	var requestedIndex = +req.query.dataId;

	var nextIndexJS = requestedIndex +1;
	if(nextIndexJS === location.length){
		nextIndexJS = 0
	}

	var prevIndexJS = requestedIndex -1;
	if(prevIndexJS < 0){
		prevIndexJS = 0
	}

	var viewItem = location[requestedIndex];
	console.log(location, requestedIndex)

	if(viewItem === undefined){
		res.render('not-location', {
			term: req.query.dataId
		});
	}
	else{
		res.render('location', {
			location: viewItem.location,
			next: viewItem.nextLocation,
			nextItem: nextIndexJS,
			previousItem : prevIndexJS
		});
	}
};


module.exports = {
	startLocation : startLocation,
	nextLocation : nextLocation
}