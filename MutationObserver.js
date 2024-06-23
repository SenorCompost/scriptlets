function removeProtectedGarlleries(){
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
		if(mutations[0].target.className == 'media-lazy-load' || mutations[0].target.className == 'pictures-wrapper') {
			for(let ele of document.querySelectorAll("img[src*='/media/gallery-locked']")) {
				ele.parentElement.parentElement.parentElement.style.display = "none";
				ele.src = '';
			}
		}
	});

	observer.observe(document, {
	  childList: true,
	  subtree: true,
	  attributes: true,
	});
}
