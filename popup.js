//set function to launch on button press (formatted this way due to early error
window.onload = function init(){
	document.getElementById('getUTM').onsubmit = validate;
}

//hold active tab URL in "site" section of form
chrome.tabs.query({'active': true}, function (tabs) {
    document.getElementById("site").value = tabs[0].url;
});

//on button press, input variables initialised and tracking URL built. 
function validate(){
	var source = encodeURIComponent(document.getElementById("source").value); 
	var medium = encodeURIComponent(document.getElementById("medium").value);  
	var campaign = encodeURIComponent(document.getElementById("campaign").value); 
	
	document.getElementById("trackinglink").value = document.getElementById("site").value + "?utm_source=" + source + "&utm_medium=" + medium + "&utm_campaign=" + campaign;
	//document.getElementById("trackinglink").value =   
	//return false to prevent form refreshing 
	return false;
}




