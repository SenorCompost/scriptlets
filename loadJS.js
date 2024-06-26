function loadJS(jsURL){
	var script = document.createElement('script');
	script.setAttribute("src", jsURL);
	script.setAttribute("id", "myScript");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("async", true);
	
	document.head.appendChild(script);

	script.addEventListener("load", (ev) => {
		console.log("File loading file", ev);
	});

	script.addEventListener("error", (ev) => {
		console.log("Error on loading file", ev);
	});
}
