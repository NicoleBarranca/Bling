const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.getElementsByClassName("menuItem");

Array.from(menuItems).forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log(" you have clicked!" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// wrapper.style.backgroundColor = "red";

// wrapper.style.transform = "translateX(-300vw)";
