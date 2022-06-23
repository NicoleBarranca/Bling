const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.getElementsByClassName("menuItem");

const products = [
  {
    id: 1,
    title: "Diamond Stud Earings",
    price: 198,
    description: "This is a nice pair of earings!",
    colors: [
      {
        code: "white",
        img: "img/EARING.png",
      },
      {
        code: "lightblue",
        img: "img/EARING-blue.png",
      },
    ],
  },
  {
    id: 2,
    title: "Diamond Bracelet",
    price: 118,
    description: "This is a nice bracelet!",
    colors: [
      {
        code: "white",
        img: "img/BRACELET.png",
      },
      {
        code: "lightblue",
        img: "img/BRACELET-blue.png",
      },
    ],
  },
  {
    id: 3,
    title: "Diamond Square Necklace",
    price: 178,
    description: "This is a nice necklace!",
    colors: [
      {
        code: "white",
        img: "img/NECKLACE.png",
      },
      {
        code: "lightyellow",
        img: "img/NECKLACE-yellow.png",
      },
    ],
  },
  {
    id: 4,
    title: "Blue Stone Diamond Ring",
    price: 216,
    description: "This is a nice ring!",
    colors: [
      {
        code: "darkblue",
        img: "img/RRING.png",
      },
      {
        code: "lightblue",
        img: "img/Ring-lightblue.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

Array.from(menuItems).forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    // console.log(" you have clicked!" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the chosen product
    chosenProduct = products[index];

    // change text of current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    currentProductDescription.textContent = chosenProduct.description;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
// wrapper.style.backgroundColor = "red";

// wrapper.style.transform = "translateX(-300vw)";
