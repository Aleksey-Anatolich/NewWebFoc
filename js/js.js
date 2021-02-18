let item_search = document.getElementsByClassName('search-icon');
console.log(item_search);
for (let i = 0; i <item_search.length ; i++) {
    item_search[i].addEventListener('click', search_click);
}

function search_click() {
    if (this.nextElementSibling.classList.value === "d-none"){
        this.nextElementSibling.classList.value = "d-flex";
    }
    else {
        this.nextElementSibling.classList.value = "d-none";
    }
}



