fetch('https://api.cryptonator.com/api/full/eur-xlm')
.then(function (response) {
	return response.json();
})
.then(function (data) {
	appendData(data);
})
.catch(function (err) {
	console.log('error: ' + err);
});

function appendData(data) {
document.getElementById("cc1").innerHTML = data.ticker.price 
	}
	
	
fetch('https://api.cryptonator.com/api/full/eur-btc')
.then(function (response) {
	return response.json();
})
.then(function (data) {
	appendData2(data);
})
.catch(function (err) {
	console.log('error: ' + err);
});

function appendData2(data) {
document.getElementById("cc2").innerHTML = data.ticker.price 
	}