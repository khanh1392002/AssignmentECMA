import { productList, numberA, sum } from "./data.js";

const menuList = ["Menu 1", "menu 2", "menu 3"];

const menuElement = document.querySelector("#menu");

if (menuElement) {
  // for
  // for (let i = 0; i < menuList.length; i++) {
  //   menuElement.innerHTML += `<li>${menuList[i]}</li>`;
  // }
  // for...in
  // for (let i in menuList) {
  //   menuElement.innerHTML += `<li>${menuList[i]}</li>`;
  // }
  //for...of
  // for (let menuItem of menuList) {
  //   menuElement.innerHTML += `<li>${menuItem}</li>`;
  // }
  // forEach: kết hợp giữa thằng for...in và for...of
  // menuList.forEach(function (menuItem, index) {
  //   menuElement.innerHTML += `<li>${index + menuItem}</li>`;
  // });
  // .map
  const result = menuList
    .map(function (menuItem, index) {
      return `<li>${menuItem}</li>`;
    })
    .join("");
  menuElement.innerHTML = result;
}
// =================

const productElement = document.querySelector("#products");
if (productElement) {
  const result = productList
    .map(function (productItem, index) {
      return `<div>${productItem.name}</div>`;
    })
    .join("");
  productElement.innerHTML = result;
}
console.log(numberA);
console.log("sum", sum(3, 4));
