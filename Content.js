
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType !== Node.ELEMENT_NODE) return;

            // Remove shorts from sidebar
            if (node.tagName === "A" && node.title === "Shorts"){
                node.remove();
            }

            // Remove shorts sections from right side
            if (node.nodeName.toLowerCase() === "ytd-reel-shelf-renderer"){
                node.remove();
            }

            // Remove shorts sections
            if (node.hasAttribute?.("is-shorts")){
                node.remove();
            }
        });
    });
});

observer.observe(document.body, {childList: true, subtree: true});
