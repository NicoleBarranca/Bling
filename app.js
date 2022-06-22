const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.getElementsByClassName("menuItem");

const products = [
  {
    id: 1,
    title: "Diamond Stud Earings",
    price: 198,
    colors: [
      {
        code: "white",
        img: "img/EARING.png",
      },
      {
        code: "light blue",
        img: "img/EARING.png",
      },
    ],
  },
  {
    id: 2,
    title: "Diamond Bracelet",
    price: 118,
    colors: [
      {
        code: "white",
        img: "img/BRACELET.png",
      },
      {
        code: "light pink",
        img: "img/BRACELET.png",
      },
    ],
  },
  {
    id: 3,
    title: "Diamond Square Necklace",
    price: 178,
    colors: [
      {
        code: "white",
        img: "img/BRACELET.png",
      },
      {
        code: "light yellow",
        img: "img/BRACELET.png",
      },
    ],
  },
  {
    id: 4,
    title: "Blue Stone Diamond Ring",
    price: 216,
    colors: [
      {
        code: "dark blue",
        img: "img/BRACELET.png",
      },
      {
        code: "light blue",
        img: "img/BRACELET.png",
      },
    ],
  },
];

Array.from(menuItems).forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log(" you have clicked!" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// wrapper.style.backgroundColor = "red";

// wrapper.style.transform = "translateX(-300vw)";
