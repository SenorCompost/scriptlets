function waitForElm(selector,i) {
    return new Promise(resolve => {
        if (document.querySelectorAll(selector)[i]) {
            return resolve(document.querySelectorAll(selector)[i]);
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelectorAll(selector)[i]) {
                observer.disconnect();
                resolve(document.querySelectorAll(selector)[i]);
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}
