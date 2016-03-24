var mockMode = true;
var app = angular.module('Brewmaster', ['ngMaterial']);

app.controller('AppCtrl', function($scope, $mdDialog) {
	if (mockMode) {
		$scope.beers = [
		 	{
			  	"name": "Thunderbird Lager",
			  	"brewery": "UBC Brewery",
			  	"type": "Lager",
			  	"abv": "5.1%",
			  	"ibu": "10 bitterness units",
			  	"imageLocation": "images/stock-beer.jpg"
		  	},
		  	{	
			  	"name": "Passive Aggressive",
			  	"brewery": "Brassneck",
			  	"type": "IPA",
			  	"abv": "5.3%",
			  	"ibu": "2 bitterness units",
			  	"imageLocation": "images/ipa.jpg"
		  	},
		  	{
			  	"name": "Southern Hop",
			  	"brewery": "Main Street Brewery",
			  	"type": "IPA",
			  	"abv": "6.1%",
			  	"ibu": "20 bitterness units",
			  	"imageLocation": "images/stock-beer.jpg"
			},
			{
			  	"name": "Sun God Wheat Ale",
			  	"brewery": "R&B Brewery",
			  	"type": "Hefeweizen",
			  	"abv": "5.6%",
			  	"ibu": "2 bitterness units",
			  	"imageLocation": "images/TownHallHefeweizen.jpg"
			}
	  	]
  	} else {
  		//not mockmode beers
  	}

  	$scope.showVendors = function(beer) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    	console.log('button clicked!');
	  //   $mdDialog.show(
			// $mdDialog.alert()
			// .parent(angular.element(document.querySelector('#popupContainer')))
			// .clickOutsideToClose(true)
			// .title('Showing vendors for ' + beer.name);
			// .textContent('You can specify some description text in here.')
			// .ariaLabel('Alert Dialog Demo')
			// .ok('Got it!')
			// .targetEvent(ev)
	  //   );

		console.log("clicked on a beer's vendors" + beer.name);
  	};

});