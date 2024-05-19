
function removeShortButtons(){
    const shortsButtons = document.querySelectorAll('a[title="Shorts"]');

    shortsButtons.forEach(button => {
        button.remove();
    });
}

function removeShortSections(){
    const sections = document.querySelectorAll("span#title.style-scope.ytd-rich-shelf-renderer");
    sections.forEach(title => {
        if (title.textContent.trim() === "Shorts") {
            var section = title;
            for (let i = 1; i < 7; i++) {
                section = section.parentElement;
                if (!section){
                    return;
                }
            }

            if (section.className == "style-scope ytd-rich-shelf-renderer") {
                section.style.display = "none";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    removeShortButtons();
    removeShortSections();
});

const observer = new MutationObserver(function (mutations) {
    removeShortButtons();
    removeShortSections();
});
observer.observe(document.body, { childList: true, subtree: true });