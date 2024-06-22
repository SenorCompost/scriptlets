async function removeProtectedGarlleries(){
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
		if(mutations[0].target.className == 'media-lazy-load' || mutations[0].target.className == 'pictures-wrapper') {
			for(var ele of document.querySelectorAll("img[src*='gallery-locked']")) {
				ele.parentElement.parentElement.parentElement.remove();
				await sleep(500);
			}
		}
	});

	observer.observe(document, {
	  childList: true,
	  subtree: true,
	  attributes: true,
	});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
