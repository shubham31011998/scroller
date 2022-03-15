function Scroll_top() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

function Scroll_bottom() {
    // document.body.scrollBottom = 0; // For Safari
    // document.documentElement.scrollBottom = 0;
    window.scrollTo(0, document.body.scrollHeight);
}

const allHeading = [];

function getAllElement() {
    const h1 = document.querySelectorAll("h1");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h4 = document.querySelectorAll("h4");
    const h5 = document.querySelectorAll("h5");
    const h6 = document.querySelectorAll("h6");

    // push all tags in a single array
    pushInBigArray(h1, h2, h3, h4, h5, h6);

    // console.log('allHeading', allHeading)
}
function pushInBigArray(...arr) {
    if (arr.length > 0) {
        arr.map((element) => allHeading.push(element));
    }
    renderElement();
}
function renderElement() {
    const wrap = document.querySelector("div#show_Elements_QWERTY");
    for (let i = 0; i < allHeading.length; i++) {
        let allHeadingInner = allHeading[i]
        for (let j = 0; j < allHeadingInner.length; j++) {
            wrap.appendChild(allHeadingInner[j]);
            console.table('allHeading[i]', allHeadingInner[j])
        }
    }
}