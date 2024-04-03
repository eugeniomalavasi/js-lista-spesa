const listElem = ["mango", "arancia", "salsiccia", "pizza", "tofu"]

const shopList = document.getElementById("shopping_list");
console.log(shopList);

// creazione variabile di appoggio vuota
let listElemContainer = "";

// creazione variabile indice per ciclo while
let i = 0;
while (i < listElem.length) {
    // variabile per contenere gli indici intanto che array viene ciclato
    const item = listElem[i];
    console.log(item);
    // riempiamo variabile di appoggio con variabile che contiene gli indici degli array
    listElemContainer += `<li>${item}</li>`;
    i++
}
    shopList.addEventListener("click", function() {
        shopList.classList.toggle("list_style")
    })
// OUTPUT
shopList.innerHTML = `<li>${listElemContainer}</li>`