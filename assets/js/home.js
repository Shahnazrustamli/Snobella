// function CreateCard() {

// }

let cardSection = document.querySelector(".section");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let arr = data;
    arr.forEach(elem => {
        console.log(arr);
        let products = document.createElement("div");
        products.className = "products";
    
        let container = document.createElement("div");
        container.className = "container";
    
        let item1Item = document.createElement("div");
        item1Item.className = "item1 item";
    
        let itemText = document.createElement("p");
        itemText.innerHTML = `${elem.title}`;
    
        let imageDiv = document.createElement("div");
        imageDiv.className = "image";
    
        let image = document.createElement("img");
        image.src = `${elem.image}`;
    
        imageDiv.appendChild(image);
        item1Item.append(imageDiv, itemText);
        container.append(item1Item);
        products.append(container);
        cardSection.append(products);
    });
  });
