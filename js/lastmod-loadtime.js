// Combined the last modified & page load time JS files into one, as before it seemed 
// that using 'window.onload' for both scripts caused only one to load when the page was ready!

window.onload = function (){

	// Gets the page load time and chages text content of element with id name 'timing'.

	setTimeout(function(){
		var t = performance.timing;
		var pageLoadTime = (t.loadEventEnd - t.responseEnd)/1000;
		document.getElementById("timing").textContent = pageLoadTime;
		}, 0);

	// Gets last modified date / time and changes text content of element with id 'lastMod'.

	var lastModified = new Date(document.lastModified);
	var lastModifiedDate = lastModified.toDateString() + ' at ' + lastModified.toTimeString(); 
	var elMod = document.getElementById('lastMod');
	elMod.textContent = lastModifiedDate;
};