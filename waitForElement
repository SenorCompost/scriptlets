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
