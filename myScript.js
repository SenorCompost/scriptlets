function loadJS(jsURL){
	var script = document.createElement('script');
	script.setAttribute("src", jsURL);
	script.setAttribute("id", "myScript");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("async", true);
	
	document.body.appendChild(script);

	script.addEventListener("error", (ev) => {
		console.log("Error on loading file", ev);
	});
}