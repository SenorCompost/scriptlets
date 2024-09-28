function elementReady(selector) {
  return new Promise((resolve, reject) => {
    let el = document.querySelector(selector);

    if(el){
      return resolve(el);
    }

  var observer = new MutationObserver((mutationRecords, observer) => {
    let elem = document.querySelector(selector);
      if(elem) {
        resolve(elem);
        observer.disconnect();
      }
    });

  observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
  });
}

//elementReady('div.pictures-wrapper').then((e)=> { console.log(e) });
