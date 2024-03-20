export function addToLocalStorage(url) {
    if (!localStorage.getItem("urls")) {
        localStorage.setItem("urls", JSON.stringify([]))
    }
    const jsonArrUrls = JSON.parse(localStorage.getItem("urls"));
    jsonArrUrls.push(url);
    localStorage.setItem("urls", JSON.stringify(jsonArrUrls));
}

export function getAllItensInLocaStorage() {
    if (!localStorage.getItem("urls")) {
        localStorage.setItem("urls", JSON.stringify([]))
    }
    const jsonArrUrls = JSON.parse(localStorage.getItem("urls"));
    return jsonArrUrls;
}