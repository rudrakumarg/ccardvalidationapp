

app.controller('cardCtrl', function($http, $scope, $filter) {
	var cards = {
		"amex" : "American Express",
		"discover" : "Discover Card",
		"mastero" : "Maestro",
		"mastercard" : "MasterCard",
		"visa" : "Visa",
		"default" : "No Card Match"
	};

	var vm = this;

	//exposing methods
	vm.rowClick = rowClick;
	vm.httpcall = httpcall;
	vm.validateCard = validateCard;
	
	//decalring variables
	vm.paymentpage = false;
	vm.accData = [];
	vm.purchaseVal;

	function rowClick(val) {
		console.log(val);
		vm.paymentpage = true;
		vm.purchaseVal = val.roll.makemodel;
	};
	
	function validateCard(){
		if(vm.myccno && vm.myccno !== ''){
		var card= $filter('validate')(vm.myccno);
		alert('valid '+ card +' !');
		}
	};

	function httpcall() {

		$http.get('json/test.json').then(function(result) {
			// ... Stuff on success ...
			console.log('result', result);
			vm.accData = result.data.accountdata;
		}, function(result) {
			// ... Stuff on failure ...
			console.log('fail');
		});
	};

	httpcall();

}); 