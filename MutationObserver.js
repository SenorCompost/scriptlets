MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    console.log(mutations, observer);
});

observer.observe(document.querySelector("div.pictures-wrapper"), {
  childList: true,
  subtree: true,
  attributes: true,
});
