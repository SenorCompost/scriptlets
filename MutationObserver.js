function removeProtectedGarlleries(){
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
		if(mutations[0].target.className == 'media-lazy-load' || mutations[0].target.className == 'pictures-wrapper') {
			for(let ele of document.querySelectorAll("div.media-lazy-load")) {
				if(ele.innerHTML.indexOf('media/gallery-locked') > 0) {
					ele.style.display = "none";
				}
			}
		}
	});

	observer.observe(document, {
	  childList: true,
	  subtree: true,
	  attributes: true,
	});
}
