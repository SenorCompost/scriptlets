function onElementAvailable(selector, callback) {
  var observer = new MutationObserver(mutations => {
    if (document.querySelector(selector)) {
		observer.disconnect();
		callback();
    }
});
	observer.observe(document, {
		childList: true,
		subtree: true,
		attributes: true,
	});
}

onElementAvailable('div#indexWrapper', () => {
	for(let a of document.querySelectorAll("ul.list-boards >li >a")) {
		a.setAttribute("href", a.href + "catalog.html"); a.setAttribute("target", "_blank");
	}
});
